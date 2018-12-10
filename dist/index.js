'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.install = undefined;

var _ZXDialogAlert = require('../components/ZXDialogAlert.vue');

var _ZXDialogAlert2 = _interopRequireDefault(_ZXDialogAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $vm = void 0;
var plugin = {
    install: function install(vue) {
        var pluginOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var Toast = vue.extend(_ZXDialogAlert2.default);
        if (!$vm) {
            $vm = new Toast({
                el: document.createElement('div')
            });
            document.body.appendChild($vm.$el);
        }
        var $ZXDialogAlert = {
            show: function show(opts) {
                $vm.show = false;
                opts = opts || {};
                opts.width = opts.width || "80%";
                opts.maxWidth = opts.maxWidth || null;
                opts.maskZIndex = opts.maskZIndex || 1000;
                opts.title = opts.title || null;
                opts.minTitle = opts.minTitle || null;
                opts.props = opts.props || {};
                opts._event = opts._event || {};
                opts.content = opts.content || null;
                opts.components = opts.components || null;

                for (var i in opts) {
                    if (i == 'onShow' || i == 'onHide' || i == 'onClose' || i == '_event') {
                        $vm[i] = opts[i];
                    } else {
                        $vm.$props[i] = opts[i];
                    }
                }
                $vm.show = true;
            },
            hide: function hide() {
                $vm.show = false;
            }
        };
        if (!vue.$ZAlert) {
            vue.$ZAlert = $ZXDialogAlert;
        }
        vue.mixin({
            created: function created() {
                this.$ZAlert = vue.$ZAlert;
            }
        });
    }
};
exports.default = plugin;
var install = exports.install = plugin.install;