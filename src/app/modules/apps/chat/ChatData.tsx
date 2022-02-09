import { toAbsoluteUrl } from "../../../../_start/helpers";

export interface IMessage {
  text: string;
  user: string;
  avatarURL: string;
  when: string;
  isAuthor: boolean;
}

export const chatExamples: Array<IMessage> = [
  {
    user: "Ja Morant",
    text:
      "Outlines keep you honest. They stop you from indulging in poorly of your post",
    when: "2 Months ago",
    avatarURL: toAbsoluteUrl("/media/svg/avatars/035-boy-15.svg"),
    isAuthor: false,
  },
  {
    user: "Grace Logan",
    text: "Amazing Product developer by the team",
    when: "Yestarday at 5:06 PM",
    avatarURL: toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg"),
    isAuthor: true,
  },
  {
    user: "Ja Morant",
    text: "They stop you from indulging in your post",
    when: "Just Now",
    avatarURL: toAbsoluteUrl("/media/svg/avatars/035-boy-15.svg"),
    isAuthor: false,
  },
];


export const automaticAnswerMessage: IMessage = {
  user: "Ja Morant",
  text: "Right before vacation season we have the next Big Deal for you",
  when: "Just Now",
  avatarURL: toAbsoluteUrl("/media/svg/avatars/035-boy-15.svg"),
  isAuthor: false,
};
