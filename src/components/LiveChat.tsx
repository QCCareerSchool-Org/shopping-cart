/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';

declare global {
  interface Window {
    LC_API: {
      on_before_load?: (...args: any[]) => any;
      on_after_load?: (...args: any[]) => any;
      on_chat_window_opened?: (...args: any[]) => any;
      on_chat_window_minimized?: (...args: any[]) => any;
      on_chat_window_hidden?: (...args: any[]) => any;
      on_chat_state_changed?: (...args: any[]) => any;
      on_chat_started?: (...args: any[]) => any;
      on_chat_ended?: (...args: any[]) => any;
      on_message?: (...args: any[]) => any;
      on_ticket_created?: (...args: any[]) => any;
      on_prechat_survey_submitted?: (...args: any[]) => any;
      on_rating_submitted?: (...args: any[]) => any;
      on_rating_comment_submitted?: (...args: any[]) => any;
    };
    __lc: {
      license: number;
      group?: number;
      onChatLoaded?: (...args: any[]) => any;
      chat_between_groups?: boolean;
      params: any;
      visitor?: any;
      ga_version?: 'pageTracker' | 'urchinTracker' | 'gtm' | 'gaq' | 'ga' | 'gtag';
    };
  }
}

type Props = {
  license: number;
  group: number;
  onChatLoaded?: (...args: any[]) => any;
  onErrorLoading?: (...args: any[]) => any;
  chatBetweenGroups?: boolean;
  params?: any;
  visitor?: any;
  gaVersion?: 'pageTracker' | 'urchinTracker' | 'gtm' | 'gaq' | 'ga' | 'gtag';

  onBeforeLoad?: (...args: any[]) => any;
  onAfterLoad?: (...args: any[]) => any;
  onChatWindowOpened?: (...args: any[]) => any;
  onChatWindowMinimized?: (...args: any[]) => any;
  onChatWindowHidden?: (...args: any[]) => any;
  onChatStateChanged?: (...args: any[]) => any;
  onChatStarted?: (...args: any[]) => any;
  onChatEnded?: (...args: any[]) => any;
  onMessage?: (...args: any[]) => any;
  onTicketCreated?: (...args: any[]) => any;
  onPrechatSurveySubmitted?: (...args: any[]) => any;
  onRatingSubmitted?: (...args: any[]) => any;
  onRatingCommentSubmitted?: (...args: any[]) => any;
};

export class LiveChat extends React.PureComponent<Props> {
  private static readonly defaultProps = {
    group: 0,
  };

  private static readonly propTypes = {
    // important
    license: PropTypes.number.isRequired,
    group: PropTypes.number,
    onChatLoaded: PropTypes.func,
    // less important
    params: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })),
    visitor: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
    gaVersion: PropTypes.oneOf([
      'pageTracker',
      'urchinTracker',
      'gtm',
      'gaq',
      'ga',
      'gtag',
    ]),
    chatBetweenGroups: PropTypes.bool,
    onBeforeLoad: PropTypes.func,
    onAfterLoad: PropTypes.func,
    onChatWindowOpened: PropTypes.func,
    onChatWindowMinimized: PropTypes.func,
    onChatWindowHidden: PropTypes.func,
    onChatStateChanged: PropTypes.func,
    onChatStarted: PropTypes.func,
    onChatEnded: PropTypes.func,
    onMessage: PropTypes.func,
    onTicketCreated: PropTypes.func,
    onPrechatSurveySubmitted: PropTypes.func,
    onPostchatSurveySubmitted: PropTypes.func,
    onRatingSubmitted: PropTypes.func,
    onRatingCommentSubmitted: PropTypes.func,
  };

  public constructor(props: Props) {
    super(props);
    this.loadLiveChatApi.bind(this)();
  }

  // public componentWillMount() {
  //   this.loadLiveChatApi.bind(this)();
  // }

  // public componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.)
  // }

  public chatLoaded(): void {
    if (window.LC_API) {
      this.setCallbacks.bind(this)();
      if (typeof this.props.onChatLoaded === 'function') {
        this.props.onChatLoaded(window.LC_API);
      }
    }
  }

  public chatNotLoaded(): void {
    if (typeof this.props.onErrorLoading === 'function') {
      this.props.onErrorLoading();
    }
  }

  public loadLiveChatApi(): void {
    if (!window.LC_API) {
      window.__lc = window.__lc || {};
      window.__lc.license = this.props.license;
      window.__lc.group = this.props.group;
      window.__lc.chat_between_groups = this.props.chatBetweenGroups;
      window.__lc.params = this.props.params;
      window.__lc.visitor = this.props.visitor;
      window.__lc.ga_version = this.props.gaVersion;
      const lc = document.createElement('script');
      lc.type = 'text/javascript';
      lc.async = true;
      lc.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
      const s = document.getElementsByTagName('script')[0];
      if (s.parentNode) {
        s.parentNode.insertBefore(lc, s);
        lc.addEventListener('load', this.chatLoaded.bind(this));
        lc.addEventListener('error', this.chatNotLoaded.bind(this));
      }
    }
  }

  public render(): null {
    return null;
  }

  public setCallbacks(): void {
    if (typeof this.props.onBeforeLoad === 'function') {
      window.LC_API.on_before_load = this.props.onBeforeLoad.bind(this);
    }

    if (typeof this.props.onAfterLoad === 'function') {
      window.LC_API.on_after_load = this.props.onAfterLoad.bind(this);
    }

    if (typeof this.props.onChatWindowOpened === 'function') {
      window.LC_API.on_chat_window_opened = this.props.onChatWindowOpened.bind(this);
    }

    if (typeof this.props.onChatWindowMinimized === 'function') {
      window.LC_API.on_chat_window_minimized = this.props.onChatWindowMinimized.bind(this);
    }

    if (typeof this.props.onChatWindowHidden === 'function') {
      window.LC_API.on_chat_window_hidden = this.props.onChatWindowHidden.bind(this);
    }

    if (typeof this.props.onChatStateChanged === 'function') {
      window.LC_API.on_chat_state_changed = this.props.onChatStateChanged.bind(this);
    }

    if (typeof this.props.onChatStarted === 'function') {
      window.LC_API.on_chat_started = this.props.onChatStarted.bind(this);
    }

    if (typeof this.props.onChatEnded === 'function') {
      window.LC_API.on_chat_ended = this.props.onChatEnded.bind(this);
    }

    if (typeof this.props.onMessage === 'function') {
      window.LC_API.on_message = this.props.onMessage.bind(this);
    }

    if (typeof this.props.onTicketCreated === 'function') {
      window.LC_API.on_ticket_created = this.props.onTicketCreated.bind(this);
    }

    if (typeof this.props.onPrechatSurveySubmitted === 'function') {
      window.LC_API.on_prechat_survey_submitted = this.props.onPrechatSurveySubmitted.bind(this);
    }

    if (typeof this.props.onRatingSubmitted === 'function') {
      window.LC_API.on_rating_submitted = this.props.onRatingSubmitted.bind(this);
    }

    if (typeof this.props.onRatingCommentSubmitted === 'function') {
      window.LC_API.on_rating_comment_submitted = this.props.onRatingCommentSubmitted.bind(this);
    }
  }
}
