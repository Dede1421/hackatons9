// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/scripts/main.js":[function(require,module,exports) {
//Ejercicio1
function suma() {
  var Numero1 = 30;
  var Numero2 = 20;
  return Numero1 + Numero2;
}

console.log("La suma de los dos n\xFAmeros es ".concat(suma())); //Ejercicio2

function promedio() {
  var NotaMatematica = 16;
  var NotaLenguaje = 15;
  var NotaEconomia = 14;
  var NotaHistoria = 13;
  return (NotaMatematica + NotaLenguaje + NotaEconomia + NotaHistoria) / 4;
}

console.log("El promedio de los cursos que tiene el alumno es ".concat(promedio())); //Ejercicio3

function areaRectangulo() {
  var baseDelRectangulo = 4;
  var alturaDelRectangulo = 2;
  return baseDelRectangulo * alturaDelRectangulo;
}

console.log("El \xE1rea del rect\xE1ngulo es ".concat(areaRectangulo())); //Ejercicio4

function areaTriangulo() {
  var baseDelTriangulo = 5;
  var alturaDelTriangulo = 3;
  return baseDelTriangulo * alturaDelTriangulo / 2;
}

console.log("El \xE1rea del tri\xE1ngulo es ".concat(areaTriangulo())); //Ejercicio5

function areaCircunferencia() {
  var radioDeCircunferencia = 2;
  return Math.PI * Math.pow(radioDeCircunferencia, 2);
}

console.log("El \xE1rea de la circunferencia es ".concat(areaCircunferencia())); //Ejercicio6

function sueldoTrabajdorSemanal() {
  var horasTrabajadas = 20;
  var salarioPorHora = 10;
  return salarioPorHora * horasTrabajadas;
}

console.log("El sueldo semanal del trabajador es ".concat(sueldoTrabajdorSemanal())); //Ejercicio7

function telasEnPulgadas() {
  var telasEnMetros = 100;
  return telasEnMetros / 0.0254;
}

console.log("La cantidad de telas en pulgadas es ".concat(telasEnPulgadas())); //Ejercicio8

function conversionADolares() {
  var cantidadDeSoles = 50000;
  return cantidadDeSoles / 3.51;
}

console.log("Importador usted tiene ".concat(conversionADolares(), " en d\xF3lares")); //Ejercicio9

function EdadPostulante() {
  var añodeNacimientoPostulante = 1991;
  return 2020 - añodeNacimientoPostulante;
}

console.log("La edad del postulante es ".concat(EdadPostulante(), " a\xF1os")); //Ejercicio10

function NombreYEdad() {
  var persona1 = {
    name: "Daniel",
    age: 21
  };
  var persona2 = {
    name: "Arthur",
    age: 24
  };
  var persona3 = {
    name: "Alexander",
    age: 26
  };

  if (persona1.age < persona2.age && persona1.age < persona3.age) {
    console.log("La persona con menor edad es ".concat(persona1.name, " y tiene ").concat(persona1.age, " a\xF1os"));
  }

  if (persona2.age < persona1.age && persona2.age < persona3.age) {
    console.log("La persona con menor edad es ".concat(persona2.name, " y tiene ").concat(persona2.age, " a\xF1os"));
  }

  if (persona3.age < persona1.age && persona3.age < persona1.age) {
    console.log("La persona con menor edad es ".concat(persona3.name, " y tiene ").concat(persona3.age, " a\xF1os"));
  }
}

NombreYEdad(); //Ejercicio11

function bonoEmpleado() {
  var añosTrabajadosEmpleado = 3;

  switch (añosTrabajadosEmpleado) {
    case 1:
      console.log("El empleado recibe un bono de 100 dólares");
      break;

    case 2:
      console.log("El empleado recibe un bono de 200 dólares");
      break;

    case 3:
      console.log("El empleado recibe un bono de 300 dólares");
      break;

    case 4:
      console.log("El empleado recibe un bono de 400 dólares");
      break;

    case 5:
      console.log("El empleado recibe un bono de 500 dólares");
      break;

    default:
      console.log("El empleado recibe un bono de 1000 dólares");
  }
}

bonoEmpleado(); //Ejercicio12

function sueldoProfesor() {
  var salarioInicial = 1500;

  for (var año = 1; año <= 6; año++) {
    salarioInicial = salarioInicial * Math.pow(1.1, 6);
    console.log("El a\xF1o ".concat(año, " tendr\xE1 ").concat(salarioInicial));
  }
}

sueldoProfesor(); //Ejercicio13

function alumnosNota() {
  var alumnosAprobados = 0;
  var alumnosDesaprobados = 0;
  var nAlumnos = 5;
  var nota = [18, 17, 15, 13, 16];

  for (var i = 0; i < nota.length; i++) {
    var unaNota = nota[i];

    if (unaNota >= 11 && unaNota <= 20) {
      alumnosAprobados++;
    }
  }

  alumnosDesaprobados = nAlumnos - alumnosAprobados;
  console.log("El n\xFAmero de alumnos aprobados es ".concat(alumnosAprobados));
  console.log("El n\xFAmero de alumnos desaprobados es ".concat(alumnosDesaprobados));
}

alumnosNota(); //Ejercicio14

function focosLote() {
  var focoVerdes = 0;
  var focoBlancos = 0;
  var focoRojos = 0;
  var loteFocos = ["Rojo", "Blanco", "Blanco", "Verde", "Verde"];

  for (var i = 0; i < loteFocos.length; i++) {
    var unFoco = loteFocos[i];

    if (unFoco == "Verde") {
      focoVerdes++;
    }

    if (unFoco == "Blanco") {
      focoBlancos++;
    }

    if (unFoco == "Rojo") {
      focoRojos++;
    }
  }

  console.log("El n\xFAmero de focos Verde es ".concat(focoVerdes));
  console.log("El n\xFAmero de focos Blancos es ".concat(focoBlancos));
  console.log("El n\xFAmero de focos Rojos es ".concat(focoRojos));
}

focosLote(); //Ejercicio15

function votacion() {
  var persona = 25;

  if (persona > 18) {
    console.log("Usted está habilitado para votar en las elecciones 2021");
  } else {
    console.log("Usted no cumple con la mayoría de edad. No puede votar");
  }
}

votacion();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62148" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/scripts/main.js"], null)
//# sourceMappingURL=/main.a5838760.js.map