/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

export type EventSender = (name: string, params: Object) => void;

class InspectorAgent {
  _eventSender: EventSender;

  constructor(eventSender: EventSender) {
    this._eventSender = eventSender;
  }

  sendEvent(name: string, params: Object) {
    this._eventSender(name, params);
  }
}

module.exports = InspectorAgent;
