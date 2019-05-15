'use strict';
module.exports = getEmitter();

function Listener(eventName, subscriber, handler) {
    this._eventName = eventName;    
    this._subscriber = subscriber;
    this._handler = handler;
    this.callEvent = function(){
        this._subscriber.call(this._eventName);
        return this
    }
}

/**
 * Возвращает новый emitter
 * @returns {Object}
 */
function getEmitter() {
    return {

        myEvents: {},

        on: function (event, handler, subscriber) {
            if (!this.myEvents.hasOwnProperty(event)) {
                this.myEvents[event] = [];
            }
            this.myEvents[event].push(new Listener(handler, subscriber));

            return this;
        },

        off: function (event, _eventName) {
            Object.keys(this.myEvents).forEach(function (currentEvent) {
                if (currentEvent === event || currentEvent.indexOf(event + '.') === 0) {
                    var listeners = this.myEvents[currentEvent];
                    this.myEvents[currentEvent] = listeners.filter(function (listener) {
                        return listener._eventName !== _eventName;
                    });
                }
            }, this);

            return this;
        },

        /**
         * Уведомить о событии
         * @param {String} event
         * @returns {Object}
         */
        emit: function (event) {
            var listeners = this.myEvents[event];
            if (this.myEvents.hasOwnProperty(event)) {
                for (var i=0; i<this.myEvents[event].length; i++) {
                    this.myEvents[event][i].callEvent();
                }
            }

            return this;

        }
    };
}