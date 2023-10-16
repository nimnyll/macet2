import chekt from '../img/Check.png'

function Tiap2 ({image}){
    return(
        <div className="tiap2">
            <div className="flexr">
                <div className="ax"><p className="ax-p">акция</p></div>
                <h2 className="h2-tiap2">Играй и выигрывай!</h2>
            </div>
            <p className="p-tiap2">Играй в 
                <span className="p-b"> Cyberpunk 2077</span>    
                 и получи возможность выиграть консоль 
                 <span className="p-b"> Xbox Series X</span> или 
                 <span className="p-b"> Sony PlayStation 5!</span> Заполни форму ниже и приложи
                  скриншот о покупке игры. Итоги розыгрыша
                  будут подведены 1 февраля. Удачи! ;)</p>
            <div className="flexr tiap21">
                <div>
                    <input className="input-tiap2"></input>
                    <input className="input-tiap21"></input>
                    <div className="div-b">
                        <a className="a-tiap2">Прикрепить скриншот</a>
                        <p className="p-tiap21">.png / .jpg / .pdf</p>
                    </div>
                    <button className="buton-tiap2">Отправить</button>
                    <article className="art-tiap2 flexr">
                        <img className="chekt" src={chekt}></img>
                        <p className="p-chekt">Согласен на обработку персональных данных</p>
                    </article>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Tiap2;