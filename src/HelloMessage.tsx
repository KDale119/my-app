
interface HelloMessageProp {
    name: string;
}

export default function HelloMessage({name}:HelloMessageProp){
    return(
        <div>
            {name}
        </div>
    );
}
