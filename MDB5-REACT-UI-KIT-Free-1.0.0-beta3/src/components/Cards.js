import React from 'react';

function Cards() {
    return (
        <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://shikalad.ru/i/imgs/allsoft.ru/upload/programs_pictograms/c56/c56da1293333aee85209507ecfd35c9c.png" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body" style={{ color: 'black' }}>
                        <h5 class="card-title">Документы</h5>
                        <p class="card-text">
                            Просмотр и скачивание документов по дипломному проектированию
                        </p>
                        <a href="#!" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://zakonguru.com/wp-content/uploads/2020/07/234.jpg" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body" style={{ color: 'black' }}>
                        <h5 class="card-title">Сроки выполнения</h5>
                        <p class="card-text">
                            Последовательность проведения мероприятий по подготовке и защите дипломных проектов
                        </p>
                        <a href="#!" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkyui_M2RmFZOwcqPaUAS8o6aKTM5SRkZCeTgDn6uOyic" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body" style={{ color: 'black' }}>
                        <h5 class="card-title">Графики</h5>
                        <p class="card-text">
                            Графики консультаций и очередности защиты дипломных проектов
                        </p>
                        <a href="#!" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Cards;