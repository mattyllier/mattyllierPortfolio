import ReactCurvedText from 'react'

export default function RoundText(){
    return (
        <ReactCurvedText
        width={300}
        height={300}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={50}
        reversed={false}
        text='Matt Reilly'
        textProps={{style: {fontSize: 56}}}
        />
    )
}