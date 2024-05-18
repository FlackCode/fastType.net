const Game = () => {
    const wordString = "the be to of and a in that have it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us abstruse acquiesce antediluvian apotheosis assiduous celerity circumlocution cogent deleterious elucidate exacerbate expeditious facetious garrulous idiosyncratic incontrovertible jocular juxtaposition lethargic magnanimous nefarious obfuscate plethora quixotic recalcitrant serendipity taciturn ubiquitous veracity wistful xenophobia yoke zenith";
    const wordsArray = wordString.split(' ')
    return(
        <div className="flex flex-grow bg-zinc-900 p-6 h-full justify-center">
            <div className="w-4/5 border-2 border-white p-4 flex flex-col gap-4">
                <div>
                    <h1 className="text-white text-3xl">30</h1>
                </div>
            </div>
        </div>
    )
}

export default Game