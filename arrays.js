var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var ar = [element,...array]
  return ar
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

