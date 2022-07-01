import { createClient, createMicrophoneAndCameraTracks } from "custom-agora-rtc-react";

const appId = "c080b47d5a044eeba24fc69c205dce1b";
const token =
  "006c080b47d5a044eeba24fc69c205dce1bIADwEBO2F1zhqTNs9jlGLmD/Vw1TsCtTwQMLmELhDgfGsmTNKL8AAAAAEAAFUAr/v92/YgEAAQC+3b9i";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
