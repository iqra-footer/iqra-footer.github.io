/**
  * Copyright Kubuz @2020
  * POINTER
  * Is Object with a group of `Shared Variable/Data/Object for Main Source/Lives`
  * Pointer possible to optimize memory used every declare data
  * Example instead let a = 9; (function() { console.log(a); })(); (function() { let b = a; let c = b*3; console.log(b); })();
  * With Pointer you can declare variable once, pointer.a = 9; (function() { console.log(pointer.a) })(); (function() { console.log(pointer.a*3) })();
  * Pointer is only technique for pointing a data on an exists variable(just say `vessel variable`), refill, and reused without declare new variable
  * You can create new Pointer on your app with this pointer.variableName and you can reuse at each module
  * (c) 2019-2020 Dimas Pratama
  * Released under the Kubuz License.
  **/

/* This is the base pointer, please don't do anything if hesitate */
// eslint-disable-next-line no-unused-vars
var xr447p4tr = {
  connected: false,
  export: function (memory) { for (var addr in memory) { this[addr] = memory[addr]; } },
  '*': function (memory) { this.export(memory); },
  import: function (addr) { return this[addr]; },
  '&': function (addr) { return this.import(addr); },
  bulk: function (addrs) { var block = {}; for (var i in addrs) { block[addrs[i]] = this.import(addrs[i]); } return block; },
  '&&': function (addrs) { return this.bulk(addrs); },
  mutate: function (memory) { for (var addr in memory) { this[addr] = memory[addr]; } },
  '>': function (memory) { this.mutate(memory); },
  module: {
    list: {},
    export: function (package) { for (var k in package) { this.list[k] = package[k]; } },
    '*': function (package) { this.export(package); },
    import: function (package) { return this.list[package]; },
    '&': function (package) { return this.import(package); },
    bulk: function (packages) { var store = {}; for (var i in packages) { store[packages[i]] = this.import(packages[i]); } return store; },
    '&&': function (packages) { return this.bulk(packages); },
    mutate: function (package) { for (var k in package) { this.list[k] = package[k]; } },
    '>': function (package) { this.mutate(package); }
  }
};
