import React from "react";



export function SolutionCard(props){
    return(
        <div className="w-3/4 rounded-md bg-slate-100 mt-10 flex flex-col md:flex-row hover:-translate-y-4 hover:scale-110 transition "> 
                    <div className="flex w-full h-96 bg-auto bg-center md:h-64 md:w-64 rounded-md" style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="flex flex-col w-full p-6 whitespace-normal">
                        <h2 className="text-4xl font-quicksand font-semibold">{props.title}</h2>
                        <p className="font-quicksand pt-6">
                           {props.text}
                        </p>
                    </div>
                </div>

    )
}