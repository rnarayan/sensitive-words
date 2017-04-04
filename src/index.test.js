import {sensitiveWords} from '.'

test ('replaces blacklisted words with asterisks', () => (
    expect(sensitiveWords(
        'The name of of the NX will be the Nintedo Switch',
        ['switch']
        ))
    .toBe('The name of of the NX will be the Nintedo *****')
))

test ('replaces mulitple instance of blacklisted words ', () => (
    expect(sensitiveWords(
        'The name of of the NX will be the Nintedo Switch. The switch will be awesome.',
        ['switch']
        ))
    .toBe('The name of of the NX will be the Nintedo *****. The ***** will be awesome.')
))