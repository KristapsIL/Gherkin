import Translation from "./Translation";
import Feature from "./Feature";
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
            <Feature/>
        </>
    )
}

export default Translations;