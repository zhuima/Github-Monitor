(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    ALo4: function(e, t, a) {
      'use strict';
      var s = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = u);
      var l = s(a('pVnL'));
      a('Pwec');
      var r = s(a('CtXQ')),
        n = s(a('QILm')),
        c = s(a('q1tI')),
        i = s(a('TSYQ')),
        d = s(a('hDW5'));
      function u(e) {
        var t = e.className,
          a = e.type,
          s = e.title,
          u = e.description,
          o = e.extra,
          m = e.actions,
          p = (0, n.default)(e, ['className', 'type', 'title', 'description', 'extra', 'actions']),
          f = {
            error: c.default.createElement(r.default, {
              className: d.default.error,
              type: 'close-circle',
              theme: 'filled',
            }),
            success: c.default.createElement(r.default, {
              className: d.default.success,
              type: 'check-circle',
              theme: 'filled',
            }),
          },
          g = (0, i.default)(d.default.result, t);
        return c.default.createElement(
          'div',
          (0, l.default)({ className: g }, p),
          c.default.createElement('div', { className: d.default.icon }, f[a]),
          c.default.createElement('div', { className: d.default.title }, s),
          u && c.default.createElement('div', { className: d.default.description }, u),
          o && c.default.createElement('div', { className: d.default.extra }, o),
          m && c.default.createElement('div', { className: d.default.actions }, m)
        );
      }
    },
    UKiy: function(e, t, a) {
      'use strict';
      var s = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
      var l = s(a('2/Rp')),
        r = s(a('q1tI')),
        n = a('LLXN'),
        c = s(a('mOP9')),
        i = s(a('ALo4')),
        d = s(a('ltW9')),
        u = r.default.createElement(
          'div',
          { className: d.default.actions },
          r.default.createElement(
            'a',
            { href: '' },
            r.default.createElement(
              l.default,
              { size: 'large', type: 'primary' },
              r.default.createElement(n.FormattedMessage, {
                id: 'app.register-result.view-mailbox',
              })
            )
          ),
          r.default.createElement(
            c.default,
            { to: '/' },
            r.default.createElement(
              l.default,
              { size: 'large' },
              r.default.createElement(n.FormattedMessage, { id: 'app.register-result.back-home' })
            )
          )
        ),
        o = e => {
          var t = e.location;
          return r.default.createElement(i.default, {
            className: d.default.registerResult,
            type: 'success',
            title: r.default.createElement(
              'div',
              { className: d.default.title },
              r.default.createElement(n.FormattedMessage, {
                id: 'app.register-result.msg',
                values: { email: t.state ? t.state.account : 'AntDesign@example.com' },
              })
            ),
            description: (0, n.formatMessage)({ id: 'app.register-result.activation-email' }),
            actions: u,
            style: { marginTop: 56 },
          });
        },
        m = o;
      t.default = m;
    },
    hDW5: function(e, t, a) {
      e.exports = {
        result: 'antd-pro-components-result-index-result',
        icon: 'antd-pro-components-result-index-icon',
        success: 'antd-pro-components-result-index-success',
        error: 'antd-pro-components-result-index-error',
        title: 'antd-pro-components-result-index-title',
        description: 'antd-pro-components-result-index-description',
        extra: 'antd-pro-components-result-index-extra',
        actions: 'antd-pro-components-result-index-actions',
      };
    },
    ltW9: function(e, t, a) {
      e.exports = {
        registerResult: 'antd-pro-pages-user-register-result-registerResult',
        title: 'antd-pro-pages-user-register-result-title',
        actions: 'antd-pro-pages-user-register-result-actions',
      };
    },
  },
]);
