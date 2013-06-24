QUnit.module("Test qunit-assert-nodes assertion methods", {
    setup: function() {
        this.fixture = $('<div id="fixture" style="visibility: hidden">' +
            '<div id="case1"></div>' +
            '<div id="case2" style="display: none"></div>' +
            '<input id="case3" type="checkbox" checked="checked" />' +
            '</div>').appendTo("body");
    },
    teardown: function() {
        $( this.fixture ).remove();
    }
});

QUnit.test( "exists", function( assert ) {
    assert.nodes([
        {
            node: this.fixture.find("#case1"),
            assert: "exists",
            message: "node found"
        }
    ]);
});
QUnit.test( "visible", function( assert ) {
    assert.nodes([
        {
            node: this.fixture.find("#case1"),
            assert: "visible",
            message: "node is visible"
        }
    ]);
});
QUnit.test( "hidden", function( assert ) {
    assert.nodes([
        {
            node: this.fixture.find("#case2"),
            assert: "hidden",
            message: "node is hidden"
        }
    ]);
});
QUnit.test( "checked", function( assert ) {
    assert.nodes([
        {
            node: this.fixture.find("#case3"),
            assert: "checked",
            message: "node is checked"
        }
    ]);
});

