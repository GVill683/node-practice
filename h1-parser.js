const https = require('https')
const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        console.log(webpageText) 
        /*
        Write some code that
        (a) finds all of the words from inside the <h1> tag of a webpage, and
        (b) converts those words into an array.
        So, if a webpage has the following tags:
        ------------------------------------------------------------------------
        <body>
            ...
            <h1> Welcome to Node.js! </h1>
            ......
            <h1>Working with npm</h1>
            ....
            <h1>Installing MongoDB</h1>
            ...
        </body>
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
        */

        // YOUR CODE HERE:
        const splitRound1 = webpageText.split('<h1')
        splitRound1.shift()
        
        let wordList = []
        splitRound1.forEach(elem => {
            const splitRound2 = elem.split('<')[0]
            const splitRound3 = splitRound2.split('>')[1]
            const words = splitRound3.split(' ')
            wordList = wordList.concat(words)
        })
        
        console.log(wordList)
        

            // 1) Create a const with a variable assigned to the webpageText, spliting a the beginning of every <h1 string.
            // 2) Use a for-loop that lops through the array and inits on #1 of the array
            // 3) Make it so split ends on the closing </h1> string repeatedly. 
            
        
        
            //  for loop starting from #1, loop through the array and then split on the ending </h1> .repeating the same stuff.
            

            //  "<h1> words were looking for </h1><h1> words were looking for </h1><h1> words were looking for </h1><h1> words were looking for </h1>"
            
            // '', '> words were looking for </h1>sjhsahsxhjxsn'  '> words were looking for </h1>fhvjjhvhjvjhvsadjhvadlh'  
            // 'asjasjhadshjasdjhdasj> words were looking for '   'hsdbhjdjbsansansa> words were looking for '
            // ' words were looking for '              ' words were looking for '
              
            // ['' 'words' 'were' 'looking' 'for' '' '' 'words' 'were' 'looking' 'for' '']
            // ['words' 'were' 'looking' 'for'  'words' 'were' 'looking' 'for']
  





    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})