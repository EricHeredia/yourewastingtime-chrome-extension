console.log('running')
//document.body.innerHTML = document.body.innerHTML.replace('"subscribe', "YOU'RE WASTING TIME")

findAndReplaceDOMText(document.body, {
  find: 'Japanese',
  replace: "YOU'RE WASTING TIME"
})

// Youtube specific
findAndReplaceDOMText(document.body, {
  find: 'Subscribe',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Share',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Save',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'views',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Autoplay',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Show more',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Up next',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Published',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Recommended for you',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'ago',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'View reply',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: /View.+replies/ig,
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: /live now/ig,
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: /report search predictions/ig,
  replace: "YOU'RE WASTING TIME"
})

// End youtube specific

findAndReplaceDOMText(document.body, {
  find: 'consistently',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'FORCING',
  replace: "YOU'RE WASTING TIME"
})