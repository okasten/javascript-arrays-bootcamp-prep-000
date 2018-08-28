var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var ar = [element,...array]
  return ar
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var ar = array.unshift(element)
  return ar
}

