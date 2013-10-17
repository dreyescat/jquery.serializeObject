# jquery.serializeObject

Encode a set of form elements as a javascript object of names and values.

The resulting object takes names as properties. Each property is assigned to the corresponding value of the property name or a list of values if the name of the property appears multiple times.


## Usage

Given the form below:

    <form>
      <input type="text" name="text" value="text value"/>
      <input type="hidden" name="hidden" value="hidden value"/>
      <input type="checkbox" name="checked" checked="checked"/>
      <input type="checkbox" name="unchecked"/>
      <textarea name="textarea" rows="3">textarea value</textarea>
      <select name="single-select">
        <option value="1" selected="selected">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select name="multiple-select" multiple>
        <option value="1" selected="selected">1</option>
        <option value="2" selected="selected">2</option>
        <option value="3">3</option>
      </select>
    </form>

we can get the serialized object calling serializeObject on the form:

    $('form').serializeObject();

This call produces the following object:

    {
        "text":"text value",
        "hidden":"hidden value",
        "checked":"on",
        "textarea":"textarea value",
        "single-select":"1",
        "multiple-select":["1","2"]
    }

## Background

This jQuery plugin is based on the [jQuery.fn.serializeArray()](http://api.jquery.com/serializeArray/) function. It means that the same standard W3C rules for [successful controls](http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2) are applied to determine which elements should be serialized.
