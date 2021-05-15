import React from 'react';
import Card from "./Card";

function Cards({userDetails}) {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <Card
                    imgSrc="https://shikalad.ru/i/imgs/allsoft.ru/upload/programs_pictograms/c56/c56da1293333aee85209507ecfd35c9c.png"
                    title="Документы"
                    text="Просмотр и скачивание документов по дипломному проектированию"
                    userDetails={userDetails}
                />
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <Card
                    imgSrc="https://zakonguru.com/wp-content/uploads/2020/07/234.jpg"
                    title="Сроки выполнения"
                    text="Последовательность проведения мероприятий по подготовке и защите дипломных проектов"
                    userDetails={userDetails}
                />
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <Card
                    imgSrc="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkyui_M2RmFZOwcqPaUAS8o6aKTM5SRkZCeTgDn6uOyic"
                    title="Графики"
                    text="Графики консультаций и очередности защиты дипломных проектов"
                    userDetails={userDetails}
                />
            </div>
        </div>

    );
}

export default Cards;
