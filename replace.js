console.log('running')
//document.body.innerHTML = document.body.innerHTML.replace('"subscribe', "YOU'RE WASTING TIME")

// Youtube specific

findAndReplaceDOMText(document.body, {
  find: /subscribe [0-9]+K/ig,
  portionMode: "first",
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: /reply/gi,
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'New',
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
  find: 'Comments',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: 'Sort by',
  replace: "YOU'RE WASTING TIME"
})

findAndReplaceDOMText(document.body, {
  find: /views/gi,
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
  find: 'Add a public comment...',
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
  find: 'live now',
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
