import {
    ON_AUTOCOMPLETE_SELECT, ON_AUTOCOMPLETE_SUCCESS, ON_QUERY, ON_QUERY_SUCCESS,
    ON_RESET
} from "../constants/CourseSearchConstants";


export const courseAutocompleteSuccess = result => ({
    type: ON_AUTOCOMPLETE_SUCCESS,
        result
    });

export const courseAutocompleteSelect = id => ({
    type: ON_AUTOCOMPLETE_SELECT,
    id
});

export const courseSearchSuccess = result => ({
    type: ON_QUERY_SUCCESS,
    result
});

export const reset = () => ({
    type: "",
});