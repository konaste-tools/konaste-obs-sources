import {
  getNowPlayingSong,
  getSongDifficultyScoreInfo,
  openNowPlayingStatsWebSocket,
} from "../../../clients/KonasteApiClient.ts";
import {
  NowPlayingSongModel,
  SongDifficultyScoreInfo,
} from "../../../clients/KonasteModels.ts";
import { render } from "@testing-library/react";
import Score from "./index.tsx";
import { Mock, test, vitest, expect, vi } from "vitest";

import WebSocket from "ws";
import { act } from "react";

vitest.mock("../../../clients/KonasteApiClient.ts", () => ({
  getNowPlayingSong: vitest.fn(),
  getSongDifficultyScoreInfo: vitest.fn(),
  openNowPlayingStatsWebSocket: vitest.fn(),
}));

test("forwards active score to view", async () => {
  let eventListener: ((event: MessageEvent) => void) | undefined = undefined;

  vitest.useFakeTimers();
  const addEventListenerMock = vitest.fn();
  const fakeWebSocket = Object.create(WebSocket.prototype) as WebSocket;
  fakeWebSocket.addEventListener = addEventListenerMock;

  addEventListenerMock.mockImplementation(
    (type: string, listener: EventListenerOrEventListenerObject) => {
      if (type === "message") {
        eventListener = listener as (event: MessageEvent) => void;
      }
    },
  );

  const nowPlaying: NowPlayingSongModel = {
    artist: "",
    difficulty: "",
    difficultyId: 0,
    handTrip: 0,
    infiniteVersion: 0,
    jacketBig: "",
    jacketNormal: "",
    jacketSmall: "",
    level: 0,
    notes: 0,
    oneHand: 0,
    peak: 0,
    songId: 0,
    title: "",
    tricky: 0,
    tsumami: 0,
  };
  const songInfo: SongDifficultyScoreInfo = {
    arcadeClearType: 0,
    arcadeEx: 0,
    arcadeGrade: 0,
    arcadeScore: 0,
    difficulty: 0,
    konasteClearType: 0,
    konasteEx: 0,
    konasteGrade: 0,
    konasteScore: 9750000,
    maxChain: 0,
    timestamp: 0,
  };
  (openNowPlayingStatsWebSocket as Mock).mockResolvedValue(fakeWebSocket);
  (getSongDifficultyScoreInfo as Mock).mockResolvedValue(songInfo);
  (getNowPlayingSong as Mock).mockResolvedValue(nowPlaying);

  // Mock the useSearchParams hook
  vi.mock("wouter", async () => {
    const actual = await vi.importActual("wouter");
    return {
      ...actual,
      useSearch: () => "?display_mode=best_percent",
    };
  });

  const document = await act(async () => {
    return render(<Score />);
  });

  expect(eventListener).toBeDefined();

  expect(document.getAllByTestId("00000000").length).toBe(1);
  expect(document.getAllByTestId("000.00%").length).toBe(1);

  await sendWebSocketScore(eventListener!, 4500000);
  expect(document.getByTestId("04500000")).toBeInTheDocument();
  expect(document.getByTestId("046.15%")).toBeInTheDocument();

  await sendWebSocketScore(eventListener!);
  expect(document.getByTestId("04500000")).toBeInTheDocument();
  expect(document.getByTestId("046.15%")).toBeInTheDocument();

  await sendWebSocketScore(eventListener!, 0);
  expect(document.getByTestId("00000000")).toBeInTheDocument();
  expect(document.getByTestId("000.00%")).toBeInTheDocument();

  await sendWebSocketScore(eventListener!, 10000000);
  expect(document.getByTestId("10000000")).toBeInTheDocument();
  expect(document.getByTestId("102.56%")).toBeInTheDocument();
});

const sendWebSocketScore = async (
  fn: (event: MessageEvent) => void,
  score?: number,
) => {
  await act(async () => {
    fn!(
      new MessageEvent("message", {
        data:
          score !== undefined
            ? `{
                "chartMaxEx":1388,
                "chartMaxCombo":580,
                "maxCombo":0,
                "score":${score},
                "ex":0,
                "missedEx":0
                ,"combo":0,
                "timestamp":0.0
            }`
            : "null",
      }),
    );
  });
  await act(async () => {
    await vitest.runAllTimersAsync();
  });
};
