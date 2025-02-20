import Translation from "./Translation";
function Translations(){
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Angļu valodā</th>
                        <th>Latviešu valodā</th>
                    </tr>
                </thead>
                <tbody>
                    <Translation/>
                </tbody>
            </table>
        </>
    )
}

export default Translations;