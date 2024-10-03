// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gesture_detector = flutter_sdk.src__widgets__gesture_detector;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const colors = flutter_sdk.src__material__colors;
  const basic = flutter_sdk.src__widgets__basic;
  const framework = flutter_sdk.src__widgets__framework;
  const text = flutter_sdk.src__widgets__text;
  const alignment = flutter_sdk.src__painting__alignment;
  const binding = flutter_sdk.src__widgets__binding;
  const app = flutter_sdk.src__material__app;
  const curves = flutter_sdk.src__animation__curves;
  const navigator = flutter_sdk.src__widgets__navigator;
  const scaffold = flutter_sdk.src__material__scaffold;
  const recognizer = flutter_sdk.src__gestures__recognizer;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Engage"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[4] || CT.C4,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[5] || CT.C5
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "US",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    },
    get C7() {
      return C[7] = dart.constList([C[8] || CT.C8], ui.Locale);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: app.ThemeMode.prototype,
        [_Enum__name]: "system",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.constList([], navigator.NavigatorObserver);
    },
    get C13() {
      return C[13] = dart.constMap(core.String, T.BuildContextToWidget(), []);
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [AlignmentDirectional_y]: 0,
        [AlignmentDirectional_start]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: main.MyButton.prototype,
        [Widget_key]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[18] || CT.C18,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[5] || CT.C5
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: scaffold.Scaffold.prototype,
        [Widget_key]: null,
        [Scaffold_restorationId]: null,
        [Scaffold_endDrawerEnableOpenDragGesture]: true,
        [Scaffold_drawerEnableOpenDragGesture]: true,
        [Scaffold_drawerEdgeDragWidth]: null,
        [Scaffold_drawerDragStartBehavior]: C[15] || CT.C15,
        [Scaffold_primary]: true,
        [Scaffold_resizeToAvoidBottomInset]: null,
        [Scaffold_bottomSheet]: null,
        [Scaffold_bottomNavigationBar]: null,
        [Scaffold_backgroundColor]: null,
        [Scaffold_drawerScrimColor]: null,
        [Scaffold_onEndDrawerChanged]: null,
        [Scaffold_endDrawer]: null,
        [Scaffold_onDrawerChanged]: null,
        [Scaffold_drawer]: null,
        [Scaffold_persistentFooterAlignment]: C[16] || CT.C16,
        [Scaffold_persistentFooterButtons]: null,
        [Scaffold_floatingActionButtonAnimator]: null,
        [Scaffold_floatingActionButtonLocation]: null,
        [Scaffold_floatingActionButton]: null,
        [Scaffold_body]: C[17] || CT.C17,
        [Scaffold_appBar]: null,
        [Scaffold_extendBodyBehindAppBar]: false,
        [Scaffold_extendBody]: false
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: app.MaterialApp.prototype,
        [Widget_key]: null,
        [MaterialApp_useInheritedMediaQuery]: false,
        [MaterialApp_debugShowMaterialGrid]: false,
        [MaterialApp_scrollBehavior]: null,
        [MaterialApp_restorationScopeId]: null,
        [MaterialApp_actions]: null,
        [MaterialApp_shortcuts]: null,
        [MaterialApp_debugShowCheckedModeBanner]: true,
        [MaterialApp_showSemanticsDebugger]: false,
        [MaterialApp_checkerboardOffscreenLayers]: false,
        [MaterialApp_checkerboardRasterCacheImages]: false,
        [MaterialApp_showPerformanceOverlay]: false,
        [MaterialApp_supportedLocales]: C[7] || CT.C7,
        [MaterialApp_localeResolutionCallback]: null,
        [MaterialApp_localeListResolutionCallback]: null,
        [MaterialApp_localizationsDelegates]: null,
        [MaterialApp_locale]: null,
        [MaterialApp_color]: null,
        [MaterialApp_themeAnimationCurve]: C[9] || CT.C9,
        [MaterialApp_themeAnimationDuration]: C[10] || CT.C10,
        [MaterialApp_themeMode]: C[11] || CT.C11,
        [MaterialApp_highContrastDarkTheme]: null,
        [MaterialApp_highContrastTheme]: null,
        [MaterialApp_darkTheme]: null,
        [MaterialApp_theme]: null,
        [MaterialApp_onGenerateTitle]: null,
        [MaterialApp_title]: "",
        [MaterialApp_builder]: null,
        [MaterialApp_routerConfig]: null,
        [MaterialApp_backButtonDispatcher]: null,
        [MaterialApp_routerDelegate]: null,
        [MaterialApp_routeInformationParser]: null,
        [MaterialApp_routeInformationProvider]: null,
        [MaterialApp_navigatorObservers]: C[12] || CT.C12,
        [MaterialApp_onUnknownRoute]: null,
        [MaterialApp_onGenerateInitialRoutes]: null,
        [MaterialApp_onGenerateRoute]: null,
        [MaterialApp_initialRoute]: null,
        [MaterialApp_routes]: C[13] || CT.C13,
        [MaterialApp_home]: C[14] || CT.C14,
        [MaterialApp_scaffoldMessengerKey]: null,
        [MaterialApp_navigatorKey]: null
      });
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  main.MyButton = class MyButton extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyButton.new({key: key});
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          core.print("MyButton Was Tapped");
        }, T.VoidTovoid()), child: new container.Container.new({height: 50, padding: C[1] || CT.C1, margin: C[2] || CT.C2, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(5), color: colors.Colors.lightGreen._get(500)}), child: C[3] || CT.C3})});
    }
  };
  (main.MyButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyButton.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyButton.prototype;
  dart.addTypeTests(main.MyButton);
  dart.addTypeCaches(main.MyButton);
  dart.setMethodSignature(main.MyButton, () => ({
    __proto__: dart.getMethods(main.MyButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyButton, I[0]);
  var MaterialApp_useInheritedMediaQuery = dart.privateName(app, "MaterialApp.useInheritedMediaQuery");
  var MaterialApp_debugShowMaterialGrid = dart.privateName(app, "MaterialApp.debugShowMaterialGrid");
  var MaterialApp_scrollBehavior = dart.privateName(app, "MaterialApp.scrollBehavior");
  var MaterialApp_restorationScopeId = dart.privateName(app, "MaterialApp.restorationScopeId");
  var MaterialApp_actions = dart.privateName(app, "MaterialApp.actions");
  var MaterialApp_shortcuts = dart.privateName(app, "MaterialApp.shortcuts");
  var MaterialApp_debugShowCheckedModeBanner = dart.privateName(app, "MaterialApp.debugShowCheckedModeBanner");
  var MaterialApp_showSemanticsDebugger = dart.privateName(app, "MaterialApp.showSemanticsDebugger");
  var MaterialApp_checkerboardOffscreenLayers = dart.privateName(app, "MaterialApp.checkerboardOffscreenLayers");
  var MaterialApp_checkerboardRasterCacheImages = dart.privateName(app, "MaterialApp.checkerboardRasterCacheImages");
  var MaterialApp_showPerformanceOverlay = dart.privateName(app, "MaterialApp.showPerformanceOverlay");
  var Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  var Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  var Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  var MaterialApp_supportedLocales = dart.privateName(app, "MaterialApp.supportedLocales");
  var MaterialApp_localeResolutionCallback = dart.privateName(app, "MaterialApp.localeResolutionCallback");
  var MaterialApp_localeListResolutionCallback = dart.privateName(app, "MaterialApp.localeListResolutionCallback");
  var MaterialApp_localizationsDelegates = dart.privateName(app, "MaterialApp.localizationsDelegates");
  var MaterialApp_locale = dart.privateName(app, "MaterialApp.locale");
  var MaterialApp_color = dart.privateName(app, "MaterialApp.color");
  var MaterialApp_themeAnimationCurve = dart.privateName(app, "MaterialApp.themeAnimationCurve");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var MaterialApp_themeAnimationDuration = dart.privateName(app, "MaterialApp.themeAnimationDuration");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var MaterialApp_themeMode = dart.privateName(app, "MaterialApp.themeMode");
  var MaterialApp_highContrastDarkTheme = dart.privateName(app, "MaterialApp.highContrastDarkTheme");
  var MaterialApp_highContrastTheme = dart.privateName(app, "MaterialApp.highContrastTheme");
  var MaterialApp_darkTheme = dart.privateName(app, "MaterialApp.darkTheme");
  var MaterialApp_theme = dart.privateName(app, "MaterialApp.theme");
  var MaterialApp_onGenerateTitle = dart.privateName(app, "MaterialApp.onGenerateTitle");
  var MaterialApp_title = dart.privateName(app, "MaterialApp.title");
  var MaterialApp_builder = dart.privateName(app, "MaterialApp.builder");
  var MaterialApp_routerConfig = dart.privateName(app, "MaterialApp.routerConfig");
  var MaterialApp_backButtonDispatcher = dart.privateName(app, "MaterialApp.backButtonDispatcher");
  var MaterialApp_routerDelegate = dart.privateName(app, "MaterialApp.routerDelegate");
  var MaterialApp_routeInformationParser = dart.privateName(app, "MaterialApp.routeInformationParser");
  var MaterialApp_routeInformationProvider = dart.privateName(app, "MaterialApp.routeInformationProvider");
  var MaterialApp_navigatorObservers = dart.privateName(app, "MaterialApp.navigatorObservers");
  var MaterialApp_onUnknownRoute = dart.privateName(app, "MaterialApp.onUnknownRoute");
  var MaterialApp_onGenerateInitialRoutes = dart.privateName(app, "MaterialApp.onGenerateInitialRoutes");
  var MaterialApp_onGenerateRoute = dart.privateName(app, "MaterialApp.onGenerateRoute");
  var MaterialApp_initialRoute = dart.privateName(app, "MaterialApp.initialRoute");
  var MaterialApp_routes = dart.privateName(app, "MaterialApp.routes");
  var Scaffold_restorationId = dart.privateName(scaffold, "Scaffold.restorationId");
  var Scaffold_endDrawerEnableOpenDragGesture = dart.privateName(scaffold, "Scaffold.endDrawerEnableOpenDragGesture");
  var Scaffold_drawerEnableOpenDragGesture = dart.privateName(scaffold, "Scaffold.drawerEnableOpenDragGesture");
  var Scaffold_drawerEdgeDragWidth = dart.privateName(scaffold, "Scaffold.drawerEdgeDragWidth");
  var Scaffold_drawerDragStartBehavior = dart.privateName(scaffold, "Scaffold.drawerDragStartBehavior");
  var Scaffold_primary = dart.privateName(scaffold, "Scaffold.primary");
  var Scaffold_resizeToAvoidBottomInset = dart.privateName(scaffold, "Scaffold.resizeToAvoidBottomInset");
  var Scaffold_bottomSheet = dart.privateName(scaffold, "Scaffold.bottomSheet");
  var Scaffold_bottomNavigationBar = dart.privateName(scaffold, "Scaffold.bottomNavigationBar");
  var Scaffold_backgroundColor = dart.privateName(scaffold, "Scaffold.backgroundColor");
  var Scaffold_drawerScrimColor = dart.privateName(scaffold, "Scaffold.drawerScrimColor");
  var Scaffold_onEndDrawerChanged = dart.privateName(scaffold, "Scaffold.onEndDrawerChanged");
  var Scaffold_endDrawer = dart.privateName(scaffold, "Scaffold.endDrawer");
  var Scaffold_onDrawerChanged = dart.privateName(scaffold, "Scaffold.onDrawerChanged");
  var Scaffold_drawer = dart.privateName(scaffold, "Scaffold.drawer");
  var AlignmentDirectional_y = dart.privateName(alignment, "AlignmentDirectional.y");
  var AlignmentDirectional_start = dart.privateName(alignment, "AlignmentDirectional.start");
  var Scaffold_persistentFooterAlignment = dart.privateName(scaffold, "Scaffold.persistentFooterAlignment");
  var Scaffold_persistentFooterButtons = dart.privateName(scaffold, "Scaffold.persistentFooterButtons");
  var Scaffold_floatingActionButtonAnimator = dart.privateName(scaffold, "Scaffold.floatingActionButtonAnimator");
  var Scaffold_floatingActionButtonLocation = dart.privateName(scaffold, "Scaffold.floatingActionButtonLocation");
  var Scaffold_floatingActionButton = dart.privateName(scaffold, "Scaffold.floatingActionButton");
  var Scaffold_body = dart.privateName(scaffold, "Scaffold.body");
  var Scaffold_appBar = dart.privateName(scaffold, "Scaffold.appBar");
  var Scaffold_extendBodyBehindAppBar = dart.privateName(scaffold, "Scaffold.extendBodyBehindAppBar");
  var Scaffold_extendBody = dart.privateName(scaffold, "Scaffold.extendBody");
  var MaterialApp_home = dart.privateName(app, "MaterialApp.home");
  var MaterialApp_scaffoldMessengerKey = dart.privateName(app, "MaterialApp.scaffoldMessengerKey");
  var MaterialApp_navigatorKey = dart.privateName(app, "MaterialApp.navigatorKey");
  main.main = function main$0() {
    binding.runApp(C[6] || CT.C6);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCjD4B;AACxB,YAAO,kDACE;AACuB,UAA5B,WAAM;mCAED,qCACG,+DAGI,oDACiB,wCAAS,WACtB,AAAU,8BAAC;IAOjC;;;QArBsB;AAAhB,iDAAgB,GAAG;;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkC1B,IARD;EASF;;EC/BwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
