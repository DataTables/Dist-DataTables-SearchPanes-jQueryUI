/*! SearchPanes jQuery UI styling 3.0.0 for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-jqui', 'datatables.net-searchpanes'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-jqui')(root);
			}

			if (! window.DataTable.SearchPanes) {
				require('datatables.net-searchpanes')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

var util = DataTable.util;

util.object.assignDeep(DataTable.SearchPane.classes, {
    disabledButton: 'dtsp-paneInputButton dtsp-disabledButton',
    paneButton: 'dtsp-paneButton ui-button',
    topRow: 'dtsp-topRow ui-state-default'
});
util.object.assignDeep(DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll ui-button',
    collapseAll: 'dtsp-collapseAll ui-button',
    container: 'dtsp-searchPanes',
    panes: 'dtsp-panesContainer fg-toolbar ui-toolbar ui-widget-header',
    showAll: 'dtsp-showAll ui-button'
});


return DataTable;
}));
