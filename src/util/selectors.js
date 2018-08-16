import { dataTableId, dataAutoSelectId, dataButtonId, dataRequiredSpanId, dataCalendarId, dataMultivalueSelectId } from '../components/common';

const tableSelector = `[${dataTableId}]`;
const requiredSpanSelector = `[${dataRequiredSpanId}]`;
const emptyChildrenSelectors = [tableSelector];
const autoselectinputSelector = `[${dataAutoSelectId}]`;
const submitButtonSelector = `button[${dataButtonId}]`;
const parentSelector = [tableSelector].join(', ');
const noneditableSelector = [tableSelector].join('');

const calendarSelector = `input[${dataCalendarId}]`;
const calendarOnclickSelector = `input[${dataCalendarId}][onclick]`;
const multivalueSelectSelector = `select[${dataMultivalueSelectId}]`;

function getParentOrSelf(node) {
    const parents = $(node).parents(parentSelector);
    return parents.length ? parents[0] : node;
}

export {
    emptyChildrenSelectors, tableSelector, autoselectinputSelector, submitButtonSelector,
    parentSelector, getParentOrSelf, requiredSpanSelector, noneditableSelector, calendarSelector,
    calendarOnclickSelector, multivalueSelectSelector
};