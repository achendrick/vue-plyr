(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VuePlyr = {})));
}(this, (function (exports) { 'use strict';

// import plyr from 'plyr'
var Plyr = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'Plyr',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
    /** Array of events to emit from the plyr object */
    emit: {
      type: Array,
      required: false,
      default: function default$2() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    var this$1 = this;

    var plyr = require('plyr');
    // noinspection JSPotentiallyInvalidConstructorUsage
    this.player = new plyr(this.$el.firstChild, this.options);
    this.emit.forEach(function (element) {
      this$1.player.on(element, this$1.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.player.destroy();
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  }
};

// import Plyr from 'plyr'
var PlyrVideo = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('video', { ref: "video", staticClass: "video", attrs: { "poster": _vm.poster, "crossorigin": _vm.crossorigin } }, [_vm._l(_vm.videos, function (vid, index) {
      return _c('source', { key: index, attrs: { "src": vid.src, "type": ("video/" + (vid.format)) } });
    }), _vm._v(" "), _vm._l(_vm.subtitles, function (subtitle) {
      return _c('track', { key: subtitle.src, attrs: { "kind": "captions", "label": subtitle.label, "src": subtitle.src, "srclang": subtitle.srclang, "default": subtitle.default } });
    })], 2);
  }, staticRenderFns: [],
  name: 'PlyrVideo',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
    /** Array of events to emit from the plyr object */
    emit: {
      type: Array,
      required: false,
      default: function default$2() {
        return [];
      }
    },
    /** Link to poster to show when video hasn't played yet. */
    poster: {
      type: String,
      required: true
    },
    /** Array of videos to include in the video source. */
    videos: {
      type: Array,
      required: true,
      validator: function (value) {
        var valid = true;
        value.forEach(function (vid) {
          var hasProps = vid.hasOwnProperty('src') && vid.hasOwnProperty('format');
          if (!hasProps) {
            valid = false;
          }
        });
        return valid;
      }
    },
    /** Object for subtitles track. */
    subtitles: {
      type: Array,
      required: false,
      default: function () { return []; },
      validator: function (value) {
        var valid = true;
        value.forEach(function (track) {
          var hasProps = track.hasOwnProperty('label') && track.hasOwnProperty('src') && track.hasOwnProperty('srclang');
          if (!hasProps) {
            valid = false;
          }
        });
        return valid;
      }
    },
    /** Boolean for whether to put crossorigin attribute on the video element. */
    crossorigin: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    var this$1 = this;

    var Plyr = require('plyr');
    this.player = new Plyr(this.$el, this.options);
    this.emit.forEach(function (element) {
      this$1.player.on(element, this$1.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.player.destroy();
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  }
};

// import Plyr from 'plyr'
var PlyrYoutube = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.pe ? _c('div', { staticClass: "plyr__youtube-embed" }, [_c('iframe', { attrs: { "src": ("https://www.youtube.com/embed/" + (_vm.id)), "allowfullscreen": "", "allowtransparency": "", "allow": "autoplay" } })]) : _c('div', { attrs: { "data-plyr-provider": "youtube", "data-plyr-embed-id": _vm.id } });
  }, staticRenderFns: [],
  name: 'PlyrYoutube',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
    /** Array of events to emit from the plyr object */
    emit: {
      type: Array,
      required: false,
      default: function default$2() {
        return [];
      }
    },
    /** Link or ID of youtube video. */
    id: {
      type: String,
      required: true
    },
    /** Bool of whether to use progressive enhancement or not */
    pe: {
      type: Boolean,
      required: false,
      default: function default$3() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    var this$1 = this;

    var Plyr = require('plyr');
    this.player = new Plyr(this.$el, this.options);
    this.emit.forEach(function (element) {
      this$1.player.on(element, this$1.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.player.destroy();
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  }
};

// import Plyr from 'plyr'
var PlyrVimeo = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.pe ? _c('div', { staticClass: "plyr__video-embed" }, [_c('iframe', { attrs: { "src": ("https://player.vimeo.com/video/" + (_vm.id)), "allowfullscreen": "", "allowtransparency": "", "allow": "autoplay" } })]) : _c('div', { attrs: { "data-plyr-provider": "vimeo", "data-plyr-embed-id": _vm.id } });
  }, staticRenderFns: [],
  name: 'PlyrVimeo',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
    /** Array of events to emit from the plyr object */
    emit: {
      type: Array,
      required: false,
      default: function default$2() {
        return [];
      }
    },
    /** Link or ID of vimeo video. */
    id: {
      type: String,
      required: true
    },
    /** Bool of whether to use progressive enhancement or not */
    pe: {
      type: Boolean,
      required: false,
      default: function default$3() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    var this$1 = this;

    var Plyr = require('plyr');
    this.player = new Plyr(this.$el, this.options);
    this.emit.forEach(function (element) {
      this$1.player.on(element, this$1.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.player.destroy();
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  }
};

// import Plyr from 'plyr'
var PlyrAudio = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('audio', { ref: "audio" }, _vm._l(_vm.tracks, function (track, index) {
      return _c('source', { key: index, attrs: { "src": track.src, "type": ("audio/" + (track.format)) } });
    }));
  }, staticRenderFns: [],
  name: 'PlyrAudio',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
    /** Array of events to emit from the plyr object */
    emit: {
      type: Array,
      required: false,
      default: function default$2() {
        return [];
      }
    },
    /** Array of audio tracks to include in the audio source. */
    tracks: {
      type: Array,
      required: true,
      validator: function (value) {
        var valid = true;
        value.forEach(function (vid) {
          var hasProps = vid.hasOwnProperty('src') && vid.hasOwnProperty('format');
          if (!hasProps) {
            valid = false;
          }
        });
        return valid;
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  computed: {},
  mounted: function mounted() {
    var this$1 = this;

    var Plyr = require('plyr');
    this.player = new Plyr(this.$el, this.options);
    this.emit.forEach(function (element) {
      this$1.player.on(element, this$1.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.player.destroy();
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  }
};

var Components = [Plyr, PlyrVideo, PlyrYoutube, PlyrVimeo, PlyrAudio];

var index = (function (Vue) {
  Components.forEach(function (Component) {
    Vue.component(Component.name, Component);
  });
});

exports['default'] = index;
exports.Plyr = Plyr;
exports.PlyrVideo = PlyrVideo;
exports.PlyrAudio = PlyrAudio;
exports.PlyrYoutube = PlyrYoutube;
exports.PlyrVimeo = PlyrVimeo;

Object.defineProperty(exports, '__esModule', { value: true });

})));
