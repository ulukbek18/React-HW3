import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div classname="mainsignin">
        <div classname="registr"><h1>Регистрация</h1></div>
        <div classname="fast">Быстро и легко.</div>
        {/* <hr> */}
        <div classname="dvablocka">
                <div classname="imya">
                    <input type="text" placeholder="Имя" required>
                </div>
                <div classname="famil">
                    <input type="text" placeholder="Фамилия" required>
                </div>
        </div>
        <div classname="nomer">
            <input type="email" placeholder="Номер мобильного телефона или эл.адрес" required>
        </div>
        <div classname="parol">
            <input type="password"placeholder="Новый пароль">
        </div>
        <div classname="datarojdeniya">
            
            <div>
                
                <select name="dates" id="date">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div>
                <select name="month" id="months">
                    <option value="янв">янв</option>
                    <option value="фев">фев</option>
                    <option value="мап">мап</option>
                    <option value="апр">апр</option>
                    <option value="мая">мая</option>
                    <option value="июн">июн</option>
                    <option value="июн">июн</option>
                    <option value="авг">авг</option>
                    <option value="сен">сен</option>
                    <option value="окт">окт</option>
                    <option value="ноя">ноя</option>
                    <option value="дек">дек</option>
                </select>
            </div>
            <div>
                <select name="year" id="years">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </select>
            </div>
        </div>
        <div>
            <h5>Пол</h5>
            <div classname="radiot">
            <div classname="jenshina"><input type="radio" name="sex" id="Женщина" value="Женщина">
            <label for="Женщина">Женщина</label></div>
            <div classname="jenshina"><input type="radio" name="sex" id="Мужчина" value="Мужчина">
            <label for="Мужчина">Мужчина</label></div>
            <div classname='jenshina'><input type="radio" name="sex" id="Другое" value="Другое">
            <label for="Другое">Другое</label></div>
            </div>
        </div>
        <div classname="ludi">
            <p>
                Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию на Facebook.<a href="#">Подробнее</a>
            </p>
        </div>
        <div classname="najimaya">
            <p>
                Нажимая кнопку Регистрация, вы принимаете <a href="#">Условия</a>, <a href="#">Политику использования данных</a>и <a href="#">Политику в отношении файлов cookie.</a>.  Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.
            </p>
        </div>
        <div classname="lastbutton">
            <button>
                <a href="#">Регистрация</a>
            </button>
        </div>
    </div>
    
  )
}
