/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import SIPBuddy from './SIPBuddy';
import { store } from '../reduxStore';

let sip;
const audioRemote = document.getElementById('audio_remote');

export function sipStart(virtualNumberConfig, asteriskConfig) {
  sip = new SIPBuddy(
    asteriskConfig.iceServers,
    audioRemote,
    registrationEventCallback,
    outgoingCallEventCallback,
    incomingCallEventCallback,
    incomingMessageEventCallback
  );

  sip.register(
    asteriskConfig.asteriskIp,
    virtualNumberConfig.sipUser,
    virtualNumberConfig.sipToken,
    virtualNumberConfig.virtualNumber
  );
}

function registrationEventCallback(e) {
  console.log(`registration status -->${e}`);
}

function incomingCallEventCallback(e) {}
function generateUID(phoneNumber) {
  const out = 'OUT';
  const num = phoneNumber;
  const currentDate = new Date();
  // let cDay = currentDate.getDate().toString();
  // let cMonth= currentDate.getMonth().toString();
  // let cYear=currentDate.getFullYear().toString();
  // let d = cDay+cMonth+cYear
  const today = new Date();
  const dateObj = today.toJSON().slice(0, 10);

  /* Captures Current date */
  const date = dateObj.slice(8, 10) + dateObj.slice(5, 7) + dateObj.slice(0, 4);
  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  const acc_id = 12356;

  return `${out}-${num}-${date}-${time}-${acc_id}`;
}
console.log('somya');
console.log(generateUID('+919617520152'));

export function sipCall(phoneNumber) {
  if (sip.isSessionRegistered()) {
    const sip_headers = {
      'Caller-ID': '18329007690',
      'Do-Record': 'true',
      'Phrase-Hint': '["Tovo Test2","CollectionsTovo","Tovo","Test2",null,""]',
      Platform: 'tovo',
      UID: generateUID(phoneNumber),
      accountId: '12345',
      agentId: '27449',
      callRecordingType: 'CALL_RECORDING_DISABLED',
      isAutoSuggestedActionsRequired: 'false',
      isDialPlanRequired: 'false',
      isTranscriptRequired: 'false',
      sipTrunk: 'twiliofdev',
      transcriptLanguage: 'en-US',
      virtualNumber: 'somya-mahapatra',
    };

    sip.call(phoneNumber, sip_headers);
  }
}
export function outgoingCallEventCallback(e, cause = null) {
  console.log(`outgoing call status-->${e}`);
  store.dispatch({ type: 'CALL_STATUS', payload: e });
}

function incomingMessageEventCallback(e, cause = null) {}

export const hangupCall = () => {
  if (!sip) return;
  if (sip.isOnCall()) {
    sip.hangUp();
  }
};

export function sipUnregister() {
  sip.unregister();
}

export function callMuteUnmute() {
  sip.toggleMute();
}

export function answerCall() {}
export function recordCall() {}
