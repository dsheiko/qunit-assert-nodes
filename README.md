QUnit Nodes assertion plugin
==============
[![Build Status](https://travis-ci.org/dsheiko/qunit-assert-nodes.png?branch=master)](https://travis-ci.org/dsheiko/qunit-assert-nodes)
[![NPM version](https://badge.fury.io/js/qunit-assert-nodes.png)](http://badge.fury.io/js/qunit-assert-nodes)

The plugin provides a convenient API for batch acceptance assertions

### Usage ###

```js
assert.nodes( batch );
```

Where batch is an array of assertion request objects, each of the following structure:
```js
{
    node: node /* node reference */,
    assert: "exists" /*  one of exists, visible, hidden, checked */,
    message: "success" /* Assertion result message */
}
```

### Example ###

```js
test( "Components availability", function( assert ) {
    assert.nodes([
        {node: $("section.example"),
            assert: "exists",
            message: "Body contains section.example"
        },
        {node: $("#save-btn"),
            assert: "visible",
            message: "Save button is visible"
        },
        {node: $("#save-as-xml"),
            assert: "checked",
            message: "'Save as XML' option is checked"
        }
    ]);
});
```

For more examples, refer to the unit tests.

[![Analytics](https://ga-beacon.appspot.com/UA-1150677-13/dsheiko/qunit-assert-nodes)](http://githalytics.com/dsheiko/qunit-assert-nodes)