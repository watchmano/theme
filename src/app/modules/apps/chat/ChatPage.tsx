/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import { ScrollComponent } from "../../../../_start/assets/ts/components";
import { DataUtil, getCSS } from "../../../../_start/assets/ts/_utils";
import { KTSVG, toAbsoluteUrl } from "../../../../_start/helpers";
import { Dropdown1, Dropdown2 } from "../../../../_start/partials";
import { automaticAnswerMessage, chatExamples, IMessage } from "./ChatData";

const ChatPage: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      ScrollComponent.reinitialization();
    }, 100);
  }, []);

  const [messages, setMessages] = useState<Array<IMessage>>(chatExamples);
  const [messageText, setMessageText] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode !== 13) {
      return;
    }

    e.preventDefault();
    const newMessage = {
      user: "Grace Logan",
      text: messageText,
      when: "Just now",
      avatarURL: toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg"),
      isAuthor: true,
    };
    addMessagesToList([newMessage]);
    setMessageText("");
    setTimeout(() => {
      addMessagesToList([newMessage, automaticAnswerMessage]);
    }, 1000);
  };

  const addMessagesToList = (newMessages: Array<IMessage>) => {
    const copyMessages = Array.from(messages);
    newMessages.forEach((msg) => copyMessages.push(msg));
    setMessages(copyMessages);
    updateScroll();
  };

  const updateScroll = () => {
    if (!scrollRef.current || !messagesRef.current) {
      return;
    }

    let ps: ScrollComponent = DataUtil.get(scrollRef.current, "ps");
    scrollRef.current.scrollTop = parseInt(
      getCSS(messagesRef.current, "height")
    );

    if (ps) {
      console.log("update scroll", ps);
      ps.update();
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row">
      {/* begin::Aside */}
      <div
        className="flex-lg-row-auto w-lg-250px w-xl-400px mb-5 mb-lg-0"
        id="kt_chat_aside"
      >
        {/* begin::Card*/}
        <div className="card card-custom">
          {/* begin::Body*/}
          <div className="card-body p-9">
            {/* begin:Search*/}
            <div
              className="input-group input-group-solid"
              id="kt_chat_aside_search"
            >
              <span className="input-group-text" id="basic-addon1">
                <KTSVG
                  className="svg-icon-1 svg-icon-dark"
                  path="/media/icons/duotone/General/Search.svg"
                />
              </span>
              <input
                type="text"
                className="form-control ps-0 py-4 h-auto"
                placeholder="Search"
              />
            </div>
            {/* end:Search*/}

            {/* begin:Users*/}
            <div
              className="mt-9 scroll-y me-lg-n6 pe-lg-5"
              data-kt-scroll="true"
              data-kt-scroll-height="{'default' : '300px', 'lg': 'auto'}"
              data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_aside_search"
              data-kt-scroll-wrappers="#kt_content, #kt_wrapper"
              data-kt-scroll-offset="{'default' : '10px', 'lg' : '60px'}"
            >
              {/* begin:User*/}
              <div className="d-flex align-items-center justify-content-between mb-9">
                <div className="d-flex align-items-center">
                  {/* begin::Symbol*/}
                  <div className="symbol symbol-50px me-4">
                    <span className="symbol-label bg-light-primary">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                        className="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                  {/* end::Symbol*/}
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-gray-600 text-hover-primary fw-bolder fs-6 mb-1"
                    >
                      Brad Simmons
                    </a>
                    <span className="text-muted fw-bold">HTML, CSS</span>
                  </div>
                </div>

                <div className="d-flex flex-column align-items-end text-end">
                  <span className="text-muted fw-bold fs-7">43 mins</span>
                  <span className="badge badge-primary badge-square">6</span>
                </div>
              </div>
              {/* end:User*/}

              {/* begin:User*/}
              <div className="d-flex align-items-center justify-content-between mb-9">
                <div className="d-flex align-items-center">
                  {/* begin::Symbol*/}
                  <div className="symbol symbol-50px me-4">
                    <span className="symbol-label bg-light-danger ">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg")}
                        className="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                  {/* end::Symbol*/}
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-gray-600 text-hover-primary fw-bolder fs-6 mb-1"
                    >
                      Grace Logan
                    </a>
                    <span className="text-muted fw-bold">Python, JS</span>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end text-end">
                  <span className="text-muted fw-bold fs-7">2 hours</span>
                </div>
              </div>
              {/* end:User*/}

              {/* begin:User*/}
              <div className="d-flex align-items-center justify-content-between mb-9">
                <div className="d-flex align-items-center">
                  {/* begin::Symbol*/}
                  <div className="symbol symbol-50px me-4">
                    <span className="symbol-label bg-light-warning ">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/035-boy-15.svg")}
                        className="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                  {/* end::Symbol*/}
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-gray-600 text-hover-primary fw-bolder fs-6 mb-1"
                    >
                      Ja Morant
                    </a>
                    <span className="text-muted fw-bold">ASP.NET</span>
                  </div>
                </div>

                <div className="d-flex flex-column align-items-end text-end">
                  <span className="text-muted fw-bold fs-7">1 day</span>
                  <span className="badge badge-primary badge-square">3</span>
                </div>
              </div>
              {/* end:User*/}

              {/* begin:User*/}
              <div className="d-flex align-items-center justify-content-between mb-9">
                <div className="d-flex align-items-center">
                  {/* begin::Symbol*/}
                  <div className="symbol symbol-50px me-4">
                    <span className="symbol-label bg-light-success">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/043-boy-18.svg")}
                        className="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                  {/* end::Symbol*/}
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-gray-600 text-hover-primary fw-bolder fs-6 mb-1"
                    >
                      Kevin Leonard
                    </a>
                    <span className="text-muted fw-bold">ReactJS</span>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end text-end">
                  <span className="text-muted fw-bold fs-7">4 weeks</span>
                </div>
              </div>
              {/* end:User*/}

              {/* begin:User*/}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  {/* begin::Symbol*/}
                  <div className="symbol symbol-50px me-4">
                    <span className="symbol-label bg-light-info">
                      <img
                        src={toAbsoluteUrl("/media/svg/avatars/014-girl-7.svg")}
                        className="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                  {/* end::Symbol*/}
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-gray-600 text-hover-primary fw-bolder fs-6 mb-1"
                    >
                      Rose Gold
                    </a>
                    <span className="text-muted fw-bold">VueJS</span>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end text-end">
                  <span className="text-muted fw-bold fs-7">4 weeks</span>
                </div>
              </div>
              {/* end:User*/}
            </div>
            {/* end:Users*/}
          </div>
          {/* end::Body*/}
        </div>
        {/* end::Card*/}
      </div>
      {/* end::Aside*/}

      {/* begin::Content*/}
      <div className="flex-lg-row-fluid ms-lg-12" id="kt_chat_content">
        {/* begin::Card*/}
        <div className="card card-custom">
          {/* begin::Header*/}
          <div
            className="card-header align-items-center px-9 py-3"
            id="kt_chat_content_header"
          >
            <div className="text-start flex-grow-1">
              {/* begin::Aside Mobile Toggle*/}
              <button
                type="button"
                className="btn btn-active-light-primary btn-sm btn-icon btn-icon-md d-lg-none"
                id="kt_app_chat_toggle"
              >
                <KTSVG
                  path="/media/icons/duotone/Communication/Adress-book2.svg"
                  className="svg-icon-1"
                />
              </button>
              {/* end::Aside Mobile Toggle*/}

              {/* begin::Dropdown*/}
              <button
                type="button"
                className="btn btn-active-light-primary btn-sm btn-icon btn-icon-md"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-start"
              >
                <KTSVG
                  path="/media/icons/duotone/Communication/Add-user.svg"
                  className="svg-icon-1"
                />
              </button>
              <Dropdown1 />
              {/* end::Dropdown*/}
            </div>

            <div className="text-center flex-grow-1">
              <div className="text-gray-600 fw-bolder fs-6">Ja Morant</div>
              <div>
                <span className="badge badge-dot badge-primary"></span>
                <span className="fw-bold text-muted fs-7">Active</span>
              </div>
            </div>

            <div className="flex-grow-1 d-flex justify-content-end ">
              {/* begin::Dropdown*/}
              <button
                type="button"
                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
              >
                <KTSVG
                  path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                  className="svg-icon-1"
                />
              </button>
              <Dropdown2 />
              {/* end::Dropdown*/}
            </div>
          </div>
          {/* end::Header*/}

          {/* begin::Body*/}
          <div className="card-body px-9">
            {/* begin::Scroll*/}
            <div
              ref={scrollRef}
              className="scroll-y me-lg-n6 pe-lg-5"
              data-kt-scroll="true"
              data-kt-scroll-height="{'default' : '400px', 'lg' : 'auto'}"
              data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_content_header, #kt_chat_content_footer"
              data-kt-scroll-wrappers="#kt_content, #kt_wrapper"
              data-kt-scroll-offset="{'default' : '10px', 'lg' : '52px'}"
            >
              {/* begin::Messages*/}
              <div className="messages" ref={messagesRef}>
                {messages.map((msg, index) => (
                  <div
                    key={`msg${index}`}
                    className={`d-flex flex-column mb-5 align-items-${
                      msg.isAuthor ? "end" : "start"
                    }`}
                  >
                    {msg.isAuthor && (
                      <>
                        {/* begin::Message Out*/}
                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column text-end">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary fw-bolder"
                            >
                              {msg.user}
                            </a>
                            <span className="text-muted fw-bold fs-7">
                              {msg.when}
                            </span>
                          </div>
                          {/* begin::Symbol*/}
                          <div className="symbol symbol-40px flex-shrink-0 ms-4">
                            <span className="symbol-label bg-light">
                              <img
                                src={msg.avatarURL}
                                className="h-75 align-self-end"
                                alt=""
                              />
                            </span>
                          </div>
                          {/* end::Symbol*/}
                        </div>
                        <div className="rounded mt-2 p-5 bg-light-success text-gray-600 text-end mw-400px">
                          {msg.text}
                        </div>
                        {/* end::Message Out*/}
                      </>
                    )}
                    {!msg.isAuthor && (
                      <>
                        {/* begin::Message*/}

                        <div className="d-flex align-items-center">
                          {/* begin::Symbol*/}
                          <div className="symbol symbol-40px flex-shrink-0 me-4">
                            <span className="symbol-label bg-light">
                              <img
                                src={msg.avatarURL}
                                className="h-75 align-self-end"
                                alt=""
                              />
                            </span>
                          </div>
                          {/* end::Symbol*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary fw-bolder"
                            >
                              {msg.user}
                            </a>
                            <span className="text-muted fw-bold fs-7">
                              {msg.when}
                            </span>
                          </div>
                        </div>
                        <div className="rounded mt-2 p-5 text-gray-600  mw-400px bg-light-primary text-start">
                          {msg.text}
                        </div>
                        {/* end::Message In*/}
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* end::Messages*/}
            </div>
            {/* end::Scroll*/}
          </div>
          {/* end::Body*/}

          {/* begin::Footer*/}
          <div
            className="card-footer align-items-center px-7 py-4"
            id="kt_chat_content_footer"
          >
            {/* begin::Compose*/}
            <div className="position-relative">
              <textarea
                className="form-control border-0 p-2 resize-none overflow-hidden"
                rows={1}
                placeholder="Reply..."
                onChange={(e) => setMessageText(e.target.value)}
                value={messageText}
                onKeyDown={sendMessage}
              />
              <div className="position-absolute top-0 end-0 mr-n2">
                <span className="btn btn-icon btn-sm btn-active-light-primary">
                  <i className="fas fa-paperclip fs-4"></i>
                </span>
                <span className="btn btn-icon btn-sm btn-active-light-primary">
                  <i className="fas fa-map-marker-alt fs-4"></i>
                </span>
              </div>
            </div>
            {/* begin::Compose*/}
          </div>
          {/* end::Footer*/}
        </div>
        {/* end::Card*/}
      </div>
      {/* end::Content*/}
    </div>
  );
};

export { ChatPage };
