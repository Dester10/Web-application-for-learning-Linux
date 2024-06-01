function appTerminal(id, path = '') {
  const PAGE_ACTIVE_CLASSNAME = 'content__page_active';
  const LINK_ACITVE_CLASSNAME = 'sidebar__nav-list-item_active';
  const TAB_ACTIVE_CLASSNAME = 'content__tab-btn_active';
  const TAB_PAGE_ACTIVE_CLASSNAME = 'content__tab-page_active';

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = path + '/styles/app.css';
  document.head.appendChild(link);

  const app = document.getElementById(id);
  app.classList.add('app-terminal');

  app.insertAdjacentHTML(
    'beforeend',
    `   <div class="app">
        <div class="sidebar">
            <button class="sidebar__logo-link">
                <div class="sidebar__logo">
                    <svg height="24px"
                        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                        version="1.1" viewBox="0 0 3.35 2.98" width="27px" xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Layer_x0020_1">
                            <path class="fil0" d="M1.67 0.39c0.15,-0.09 0.3,-0.17 0.45,-0.23 0.15,-0.06 0.3,-0.11 0.44,-0.14 0.19,-0.03 0.34,-0.03 0.46,0.01 0.13,0.04 0.22,0.12 0.28,0.23 0.05,0.1 0.06,0.22 0.04,0.36 -0.04,0.19 -0.15,0.42 -0.34,0.68 -0.03,0.04 -0.06,0.08 -0.1,0.12 0.04,0.05 0.07,0.09 0.1,0.13 0.19,0.26 0.3,0.49 0.34,0.68 0.02,0.13 0.01,0.26 -0.04,0.36 -0.06,0.1 -0.15,0.18 -0.28,0.22 -0.1,0.04 -0.22,0.05 -0.37,0.03 -0.01,0.01 -0.01,0.01 -0.02,0.02l0 0c-0.07,0.07 -0.17,0.12 -0.27,0.12 -0.11,0 -0.2,-0.05 -0.27,-0.12 -0.07,-0.07 -0.12,-0.16 -0.12,-0.27 0,-0.11 0.05,-0.2 0.12,-0.27 0.07,-0.07 0.16,-0.11 0.27,-0.11 0.1,0 0.2,0.04 0.27,0.11l0 0c0.05,0.05 0.09,0.12 0.1,0.2 0.08,0 0.14,0 0.19,-0.02 0.04,-0.01 0.07,-0.03 0.08,-0.06 0.02,-0.04 0.03,-0.09 0.01,-0.16 -0.02,-0.14 -0.11,-0.32 -0.27,-0.53 -0.02,-0.03 -0.04,-0.05 -0.06,-0.08 -0.21,0.22 -0.46,0.43 -0.71,0.6 -0.4,0.28 -0.83,0.49 -1.18,0.55 -0.19,0.04 -0.34,0.03 -0.46,-0.01 -0.13,-0.04 -0.22,-0.12 -0.28,-0.22 -0.05,-0.1 -0.06,-0.23 -0.04,-0.36 0.03,-0.19 0.14,-0.42 0.33,-0.68 0.04,-0.04 0.07,-0.08 0.1,-0.13 -0.03,-0.04 -0.06,-0.08 -0.1,-0.12 -0.19,-0.26 -0.3,-0.49 -0.33,-0.68 -0.02,-0.14 -0.01,-0.26 0.04,-0.36 0.06,-0.11 0.15,-0.19 0.28,-0.23 0.12,-0.04 0.27,-0.04 0.46,-0.01 0.27,0.05 0.57,0.18 0.88,0.37zm-0.55 1.14c0.09,0 0.18,0.04 0.24,0.1l0 0c0.06,0.06 0.1,0.15 0.1,0.24 0,0.1 -0.04,0.18 -0.1,0.24l0 0c-0.06,0.07 -0.15,0.1 -0.24,0.1 -0.09,0 -0.18,-0.03 -0.24,-0.1 -0.06,-0.06 -0.1,-0.14 -0.1,-0.24 0,-0.03 0,-0.05 0.01,-0.08 -0.05,-0.04 -0.09,-0.08 -0.13,-0.12 -0.02,0.03 -0.04,0.05 -0.05,0.08 -0.16,0.21 -0.25,0.39 -0.28,0.53 -0.01,0.07 0,0.12 0.01,0.16 0.02,0.03 0.05,0.05 0.09,0.06 0.07,0.02 0.17,0.03 0.3,0 0.3,-0.06 0.68,-0.24 1.05,-0.49 0.25,-0.17 0.48,-0.37 0.69,-0.59 -0.21,-0.21 -0.44,-0.41 -0.69,-0.58 -0.37,-0.25 -0.75,-0.44 -1.05,-0.49 -0.13,-0.03 -0.23,-0.03 -0.3,-0.01 -0.04,0.02 -0.07,0.04 -0.09,0.07 -0.01,0.03 -0.02,0.09 -0.01,0.15 0.03,0.14 0.12,0.33 0.28,0.54 0.01,0.03 0.03,0.05 0.05,0.08 0.05,-0.05 0.09,-0.09 0.14,-0.14 0,-0.02 -0.01,-0.05 -0.01,-0.07 0,-0.1 0.04,-0.19 0.11,-0.25 0.06,-0.07 0.15,-0.11 0.25,-0.11 0.09,0 0.18,0.04 0.25,0.11l0 0c0.06,0.06 0.1,0.15 0.1,0.25 0,0.09 -0.04,0.18 -0.1,0.25l0 0c-0.07,0.06 -0.16,0.1 -0.25,0.1 -0.05,0 -0.1,-0.01 -0.14,-0.03 -0.04,0.05 -0.09,0.09 -0.13,0.13 0.04,0.05 0.08,0.09 0.13,0.13 0.03,-0.01 0.07,-0.02 0.11,-0.02zm0.06 0.29c-0.02,-0.02 -0.04,-0.03 -0.06,-0.03 -0.02,0 -0.04,0.01 -0.06,0.03 -0.01,0.01 -0.02,0.03 -0.02,0.05 0,0.02 0.01,0.04 0.02,0.06 0.02,0.01 0.04,0.02 0.06,0.02 0.02,0 0.04,-0.01 0.06,-0.02 0.01,-0.02 0.02,-0.04 0.02,-0.06 0,-0.02 -0.01,-0.04 -0.02,-0.05zm1.26 0.68c-0.02,-0.02 -0.05,-0.03 -0.08,-0.03 -0.04,0 -0.07,0.01 -0.09,0.03 -0.02,0.03 -0.03,0.06 -0.03,0.09 0,0.03 0.01,0.07 0.03,0.09 0.02,0.02 0.05,0.03 0.09,0.03 0.03,0 0.06,-0.01 0.08,-0.03l0 0c0.03,-0.02 0.04,-0.06 0.04,-0.09 0,-0.03 -0.01,-0.06 -0.04,-0.09l0 0zm-1.23 -1.6c-0.01,-0.01 -0.04,-0.02 -0.06,-0.02 -0.03,0 -0.05,0.01 -0.07,0.02l0 0c-0.01,0.02 -0.02,0.04 -0.02,0.07 0,0.02 0.01,0.05 0.02,0.06l0 0c0.02,0.02 0.04,0.03 0.07,0.03 0.02,0 0.05,-0.01 0.06,-0.03l0 0c0.02,-0.01 0.03,-0.04 0.03,-0.06 0,-0.03 -0.01,-0.05 -0.03,-0.07l0 0zm1.47 0.28c0.02,-0.03 0.04,-0.05 0.06,-0.08 0.16,-0.21 0.25,-0.4 0.27,-0.54 0.01,-0.06 0.01,-0.12 -0.01,-0.15 -0.01,-0.03 -0.04,-0.05 -0.08,-0.07 -0.07,-0.02 -0.17,-0.02 -0.3,0.01 -0.11,0.02 -0.24,0.06 -0.38,0.11 -0.08,0.04 -0.17,0.08 -0.25,0.13 0.24,0.17 0.48,0.37 0.69,0.59z" />
                        </g>
                    </svg>
                </div>
                <p class="sidebar__logo-link-text">
                    Обучение базовым <br> командам <br> терминала Linux
                </p>
            </button>

            <nav class="sidebar__nav">
                <ul class="sidebar__nav-list">
                    <li class="sidebar__nav-list-item sidebar__nav-list-item_active">
                        <button class="sidebar__nav-list-item-link">
                            <div class="sidebar__nav-list-item-icon">
                                <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                    <path class="cls-1"
                                        d="M23.588,8.191l-11-8a1,1,0,0,0-1.176,0l-11,8A1,1,0,0,0,1.588,9.809L3,8.782V21a2.006,2.006,0,0,0,2,2H9V14a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v9h4a2.006,2.006,0,0,0,2-2V8.782l1.412,1.027a1,1,0,1,0,1.176-1.618Z" />
                                </svg>
                            </div>
                            <p class="sidebar__nav-list-item-text">
                                Домой
                            </p>
                        </button>
                    </li>
                    <li class="sidebar__nav-list-item">
                        <button class="sidebar__nav-list-item-link">
                            <div class="sidebar__nav-list-item-icon">
                                <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect class="cls-1" height="9" rx="2" width="9" x="1" y="1" />
                                    <rect class="cls-1" height="9" rx="2" width="9" x="14" y="1" />
                                    <rect class="cls-1" height="9" rx="2" width="9" x="1" y="14" />
                                    <rect class="cls-1" height="9" rx="2" width="9" x="14" y="14" />
                                </svg>
                            </div>
                            <p class="sidebar__nav-list-item-text">
                                Обучение
                            </p>
                        </button>
                    </li>
                    <li class="sidebar__nav-list-item">
                        <button class="sidebar__nav-list-item-link">
                            <div class="sidebar__nav-list-item-icon">
                                <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path class="cls-1"
                                        d="M19,1H5A4,4,0,0,0,1,5V19a4,4,0,0,0,4,4H19a4,4,0,0,0,4-4V5A4,4,0,0,0,19,1ZM9,4A1,1,0,1,1,8,5,1,1,0,0,1,9,4ZM5,4A1,1,0,1,1,4,5,1,1,0,0,1,5,4ZM19,9H5A1,1,0,0,1,5,7H19a1,1,0,0,1,0,2Zm0-3a1,1,0,1,1,1-1A1,1,0,0,1,19,6Z" />
                                </svg>
                            </div>
                            <p class="sidebar__nav-list-item-text">
                                Терминал
                            </p>
                        </button>
                    </li>
                </ul>
            </nav>

            <div class="sidebar__profile">
                <img src="${path}/assets/img/avatar.png" alt="User Avatar" class="sidebar__profile-avatar">
                <p class="sidebar__profile-name">
                    Привет, user!
                </p>
            </div>
        </div>
        <section class="content">
            <div class="content__pages">
                <div class="content__page content__page_active">
                    <h1 class="content_heading">
                        Добро пожаловать в мир увлекательного обучения основам терминала Linux с помощью нашего
                        интерактивного приложения!
                        Здесь ты окунешься в захватывающий процесс изучения популярных команд Linux, прямо из комфорта
                        своего браузера.
                    </h1>
                    <p class="text content_text">
                        <i>С нашим приложением</i> ты сможешь <b>не только узнать об основных командах терминала</b>,
                        таких как <i>ls, cd,
                            mkdir</i> и <i>многих других</i>, <b>но и попрактиковаться в их использовании</b>. Мы
                        предоставляем <b>уникальную
                            возможность имитировать терминал Linux прямо в браузере с помощью JavaScript</b>, что
                        позволяет тебе <b>тестировать
                            и оттачивать свои навыки</b>, <i>не выходя из удобного веб-интерфейса</i>.

                        <i>Не знаешь, с чего начать? Не беспокойся!</i> <b>Наше приложение оснащено подробными
                            описаниями каждой команды</b>,
                        <i>а также примерами их использования</i>. <i>Так что даже если ты новичок в мире Linux</i>,
                        <b>мы поможем тебе
                            освоиться и стать уверенным пользователем терминала</b>.

                        <b>Присоединяйся к нам сегодня</b> <i>и отправляйся в захватывающее путешествие по миру команд
                            Linux прямо сейчас!</i>
                    </p>
                    <p class="text content_text">
                        Приложение написано на:
                    <ul>
                        <li>
                            <svg enable-background="new 0 0 32 32" height="16px" id="Layer_1" version="1.0"
                                viewBox="0 0 32 32" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <polygon fill="#E44D26"
                                        points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  " />
                                    <polygon fill="#FF6C39" points="16,2 16,29.75 25.232,27.008 27.688,2  " />
                                    <polygon fill="#FFFFFF"
                                        points="24.363,6 7.607,6 8,10 8.619,17 19.503,17 19.148,20.984 16,21.99 12.857,20.984 12.648,19    8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.718,13 12.252,13 12.002,10 24,10  " />
                                </g>
                            </svg>
                            HTML
                        </li>
                        <li>
                            <svg height="16px" style="enable-background:new 0 0 512 512;" version="1.1"
                                viewBox="0 0 512 512" width="16px" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="_x31_21-css3">
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M47.575,16.379L85.6,447.023l170.751,47.852l170.686-47.822l38.092-430.674H47.575z        M47.575,16.379"
                                                        style="fill:#2299F8;" />
                                                </g>
                                                <path
                                                    d="M383.824,157.206l-4.801,54.098l-14.5,162.185l-108.172,29.994l-0.094,0.027l-108.119-30.021      l-7.541-84.817h52.968l3.938,43.992l58.785,15.908l0.029-0.027l58.875-15.912l8.023-73.3l-185.154,0.512l-5.251-50.125      l194.844-2.306l3.943-53.648l-204.005,0.572l-3.43-49.913h264.369L383.824,157.206z M383.824,157.206"
                                                    style="fill:#FCFCFC;" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g id="Layer_1" />
                            </svg>
                            CSS
                        </li>
                        <li>
                            <svg height="16px" style="enable-background:new 0 0 512 512;" version="1.1"
                                viewBox="0 0 512 512" width="16px" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="_x31_87-js">
                                    <g>
                                        <rect height="459.998" style="fill:#F0DB4F;" width="459.996" x="26.002"
                                            y="26.001" />
                                        <path
                                            d="M276.331,384.759c0,44.767-26.286,65.2-64.586,65.2c-34.601,0-54.623-17.865-64.892-39.529    l35.218-21.255c6.777,12.013,12.938,22.177,27.826,22.177c14.169,0,23.207-5.544,23.207-27.208V237.21h43.227V384.759    L276.331,384.759z"
                                            style="fill:#323330;" />
                                        <path
                                            d="M378.598,449.959c-40.147,0-66.124-19.099-78.754-44.151l35.219-20.332    c9.241,15.095,21.356,26.286,42.611,26.286c17.866,0,29.364-8.932,29.364-21.355c0-14.787-11.704-20.021-31.52-28.75l-10.781-4.62    c-31.214-13.246-51.853-29.983-51.853-65.2c0-32.447,24.745-57.09,63.248-57.09c27.518,0,47.232,9.549,61.402,34.603    l-33.679,21.562c-7.392-13.246-15.401-18.481-27.825-18.481c-12.63,0-20.639,8.01-20.639,18.481    c0,12.938,8.009,18.176,26.594,26.285l10.78,4.621c36.759,15.71,57.397,31.832,57.397,67.974    C450.164,428.602,419.565,449.959,378.598,449.959L378.598,449.959z"
                                            style="fill:#323330;" />
                                    </g>
                                </g>
                                <g id="Layer_1" />
                            </svg>
                            JS
                        </li>
                    </ul>
                    </p>

                </div>
                <div class="content__page">
                    <div class="content__tab-list">
                        <button type="button" class="content__tab-btn  content__tab-btn_active">
                            clear
                        </button>
                        <button type="button" class="content__tab-btn">
                            history
                        </button>
                        <button type="button" class="content__tab-btn">
                            whatis
                        </button>
                        <button type="button" class="content__tab-btn">
                            man
                        </button>
                        <button type="button" class="content__tab-btn">
                            sudo
                        </button>
                        <button type="button" class="content__tab-btn">
                            ls
                        </button>
                        <button type="button" class="content__tab-btn">
                            cd
                        </button>
                        <button type="button" class="content__tab-btn">
                            mkdir
                        </button>
                        <button type="button" class="content__tab-btn">
                            rm
                        </button>
                    </div>
                    <div class="content__tab-pages">
                        <div class="content__tab-page content__tab-page_active">
                            <h2 class="heading">
                                Clear
                            </h2>
                            <p class="text">
                                <b>Команда clear</b> проста в использовании, но <i>очень полезна</i>. Когда вы работаете
                                в
                                терминале Linux, вывод некоторых
                                команд может засорять экран. В этом случае <b>clear</b> поможет очистить терминал, делая
                                его
                                более чистым и удобным для работы.
                                Это особенно полезно при работе в интерактивном режиме, когда результаты предыдущих
                                команд могут мешать читать текущий
                                вывод.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                History
                            </h2>
                            <p class="text">
                                <b>Команда history</b> предоставляет доступ к истории команд, которые вы использовали в
                                терминале. Она выводит список последних
                                выполненных команд, каждая сопровождается номером. Используя этот список, вы можете
                                легко повторить команды, которые уже
                                были введены, или выполнить их с небольшими изменениями. Это удобно для повторного
                                использования команд без
                                необходимости печатать их снова.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Whatis
                            </h2>
                            <p class="text">
                                Команда <b>whatis</b> используется для получения краткого описания любой другой команды
                                в
                                системе Linux. Она выводит краткое
                                описание команды, указанной в аргументе. Например, <b>whatis ls</b> покажет краткое
                                описание
                                команды <i>ls</i>, помогая пользователям
                                быстро понять, для чего она предназначена, без необходимости просмотра подробного
                                руководства.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Man
                            </h2>
                            <p class="text">
                                Команда <b>man</b> (от "manual") предоставляет полное руководство по использованию любой
                                другой команды в системе Linux.
                                Вводя <b>man</b> с названием команды в качестве аргумента, вы получите подробную
                                информацию о ее использовании,
                                параметрах и других важных аспектах. Руководства <b>man</b> содержат всю необходимую
                                информацию для эффективного
                                использования команды. Это особенно полезно для новичков, которым требуется справочная
                                информация о командах.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Sudo
                            </h2>
                            <p class="text">
                                <b>Команда sudo</b> является <i>мощным инструментом</i> в системах Linux. Она
                                используется для
                                выполнения команд с привилегиями
                                суперпользователя (обычно называемого root). Когда пользователь выполняет команду с
                                помощью <b>sudo</b>, ему предоставляются
                                временные права администратора, что позволяет выполнить задачи, требующие повышенных
                                привилегий, такие как управление
                                системными настройками или изменение файлов, на которые у обычного пользователя нет прав
                                доступа.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Ls
                            </h2>
                            <p class="text">
                                Команда <b>ls</b> является одной из самых часто используемых команд в терминале Linux.
                                Она используется для отображения
                                списка файлов и подкаталогов в текущем рабочем каталоге. По умолчанию <b>ls</b> выводит
                                простой список имен файлов и
                                подкаталогов, но с помощью различных опций вы можете настроить формат вывода, включая
                                подробную информацию о файлах,
                                сортировку по различным критериям и многое другое.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Cd
                            </h2>
                            <p class="text">
                                Команда <b>cd</b> используется для изменения текущего рабочего каталога в терминале
                                Linux.
                                После ввода <b>cd</b> вы можете указать
                                каталог в качестве аргумента, в который хотите перейти. Это позволяет быстро
                                перемещаться по файловой системе, навигируя
                                между различными каталогами и работая с файлами в них.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Mkdir
                            </h2>
                            <p class="text">
                                Команда <b>mkdir</b> используется для создания новых каталогов (директорий) в файловой
                                системе.
                                После ввода <b>mkdir</b> вы должны
                                указать имя нового каталога в качестве аргумента, который будет создан в текущем рабочем
                                каталоге. Это полезно, когда
                                вам нужно создать новый каталог для организации файлов или хранения данных.
                            </p>
                        </div>
                        <div class="content__tab-page">
                            <h2 class="heading">
                                Rm
                            </h2>
                            <p class="text">
                                Команда <b>rm</b> (от "remove") используется для удаления файлов или каталогов в
                                терминале
                                Linux. Она позволяет удалять файлы
                                из файловой системы, освобождая место и управляя содержимым диска. Важно помнить, что
                                <b>rm</b>
                                удаляет файлы без возможности
                                восстановления, поэтому убедитесь, что вы уверены в своих действиях перед использованием
                                этой команды.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="content__page">
                    <ul>
                        <li>clear</li>
                        <li>history</li>
                        <li>whatis</li>
                        <li>man</li>
                        <li>sudo</li>
                        <li>ls</li>
                        <li>cd</li>
                        <li>mkdir</li>
                        <li>rm</li>
                    </ul>

                    <div class="terminal">
                        <div class="output" id="output"></div>
                        <input type="text" class="input" id="input" autofocus>
                    </div>
                </div>
            </div>
        </section>
        <p class="time">
        </p>
    </div>`
  );

  const navLinkEls = document.querySelectorAll('.sidebar__nav-list-item-link');
  const pageEls = document.querySelectorAll('.content__page');
  const tabBtnEls = document.querySelectorAll('.content__tab-btn');
  const tabPageEls = document.querySelectorAll('.content__tab-page');

  const resetPages = () =>
    pageEls.forEach((p) => p.classList.remove(PAGE_ACTIVE_CLASSNAME));

  const resetLinks = () =>
    navLinkEls.forEach((l) =>
      l.parentNode.classList.remove(LINK_ACITVE_CLASSNAME)
    );

  const resetTabPages = () =>
    tabPageEls.forEach((page) =>
      page.classList.remove(TAB_PAGE_ACTIVE_CLASSNAME)
    );

  const resetTabs = () =>
    tabBtnEls.forEach((btn) => btn.classList.remove(TAB_ACTIVE_CLASSNAME));

  const makePageActive = (page) => page.classList.add(PAGE_ACTIVE_CLASSNAME);

  const makeLinkActive = (link) => link.classList.add(LINK_ACITVE_CLASSNAME);

  const makeBtnActive = (btn) => btn.classList.add(TAB_ACTIVE_CLASSNAME);

  const makeTabPageActive = (page) =>
    page.classList.add(TAB_PAGE_ACTIVE_CLASSNAME);

  navLinkEls.forEach((link, idx) =>
    link.addEventListener('click', () => {
      resetPages();
      resetLinks();
      makeLinkActive(link.parentNode);
      makePageActive(pageEls[idx]);
      closeSidebar();
    })
  );

  tabBtnEls.forEach((btn, idx) =>
    btn.addEventListener('click', () => {
      resetTabs();
      resetTabPages();
      makeBtnActive(btn);
      makeTabPageActive(tabPageEls[idx]);
    })
  );

  makePageActive(pageEls[1]);
  resetPages();
  resetLinks();
  makePageActive(pageEls[0]);

  window.addEventListener('resize', () => {
    makePageActive(pageEls[1]);
    resetPages();
    resetLinks();
    makePageActive(pageEls[0]);
  });

  const ACTIVE_SIDEBAR_CLASSNAME = 'sidebar_active';

  const sidebarEl = document.querySelector('.sidebar');

  const openSidebar = () => {
    sidebarEl.classList.add(ACTIVE_SIDEBAR_CLASSNAME);
  };

  const closeSidebar = () => {
    sidebarEl.classList.remove(ACTIVE_SIDEBAR_CLASSNAME);
  };

  sidebarEl.addEventListener('mouseenter', openSidebar);
  sidebarEl.addEventListener('mouseleave', closeSidebar);

  const inputField = document.getElementById('input');
  const outputField = document.getElementById('output');
  const commandHistory = [];
  let historyIndex = -1;
  const files = []; // Список файлов
  let currentDirectory = '/'; // Текущая директория

  // Объект с описаниями команд
  const commandDescriptions = {
    clear: 'Очищает окно вывода.',
    history: 'Отображает историю введённых команд.',
    whatis: 'Выводит описание указанной команды на русском языке.',
    man: 'Отображает руководство для указанной команды.',
    sudo: 'Отображает фиктивное поле ввода пароля.',
    ls: 'Отображает список файлов.',
    cd: 'Имитирует смену текущей директории на указанную.',
    mkdir: 'Создаёт фиктивную папку и добавляет её в список файлов.',
    rm: 'Удаляет файл или директорию из списка файлов.',
  };

  // Объект с руководствами
  const commandManuals = {
    clear: 'clear - Очищает окно вывода.',
    history: 'history - Отображает историю введённых команд.',
    whatis: 'whatis - Выводит описание указанной команды на русском языке.',
    man: 'man - Отображает руководство для указанной команды.',
    sudo: 'sudo - Отображает фиктивное поле ввода пароля.',
    ls: 'ls - Отображает список файлов.',
    cd: 'cd - Имитирует смену текущей директории на указанную.',
    mkdir: 'mkdir - Создаёт фиктивную папку и добавляет её в список файлов.',
    rm: 'rm - Удаляет файл или директорию из списка файлов.',
  };

  inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const command = inputField.value.trim();
      if (command !== '') {
        executeCommand(command);
        commandHistory.push(command);
        historyIndex = -1;
      }
      inputField.value = '';
    } else if (event.key === 'ArrowUp') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        inputField.value =
          commandHistory[commandHistory.length - 1 - historyIndex];
      }
    } else if (event.key === 'ArrowDown') {
      if (historyIndex >= 0) {
        historyIndex--;
        if (historyIndex === -1) {
          inputField.value = '';
        } else {
          inputField.value =
            commandHistory[commandHistory.length - 1 - historyIndex];
        }
      }
    }
  });

  function executeCommand(command) {
    outputField.innerHTML += `<div>$ ${command}</div>`;
    const parts = command.split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);

    switch (cmd) {
      case 'clear':
        outputField.innerHTML = '';
        break;
      case 'history':
        displayHistory();
        break;
      case 'whatis':
        displayWhatis(args);
        break;
      case 'man':
        displayMan(args);
        break;
      case 'sudo':
        requestPassword();
        break;
      case 'ls':
        displayLs();
        break;
      case 'cd':
        changeDirectory(args);
        break;
      case 'mkdir':
        createDirectory(args);
        break;
      case 'rm':
        removeFile(args);
        break;
      case 'pwd':
        displayPwd();
        break;
      case 'date':
        displayDate();
        break;
      case 'mv':
        moveFile(args);
        break;
      default:
        outputField.innerHTML += `<div>Command not found: ${cmd}</div>`;
    }
  }

  function displayHistory() {
    let historyOutput = '';
    for (let i = 0; i < commandHistory.length; i++) {
      historyOutput += `<div>${i + 1}: ${commandHistory[i]}</div>`;
    }
    outputField.innerHTML += historyOutput;
  }

  function displayWhatis(args) {
    if (args.length === 0) {
      outputField.innerHTML += `<div>Usage: whatis [command]</div>`;
    } else {
      const command = args[0];
      const description = commandDescriptions[command];
      if (description) {
        outputField.innerHTML += `<div>${description}</div>`;
      } else {
        outputField.innerHTML += `<div>No description found for command: ${command}</div>`;
      }
    }
  }

  function displayMan(args) {
    if (args.length === 0) {
      outputField.innerHTML += `<div>Usage: man [command]</div>`;
    } else {
      const command = args[0];
      const manual = commandManuals[command];
      if (manual) {
        outputField.innerHTML += `<div>${manual}</div>`;
      } else {
        outputField.innerHTML += `<div>No manual entry found for command: ${command}</div>`;
      }
    }
  }

  function displayLs() {
    let output = '';
    files.forEach((file) => {
      output += `<div>${file}</div>`;
    });
    outputField.innerHTML += output;
  }

  function createDirectory(args) {
    if (args.length === 0) {
      outputField.innerHTML += `<div>Usage: mkdir [directory_name]</div>`;
    } else {
      const directoryName = args[0];
      files.push(directoryName);
      outputField.innerHTML += `<div>Created directory: ${directoryName}</div>`;
    }
  }

  function removeFile(args) {
    if (args.length === 0) {
      outputField.innerHTML += `<div>Usage: rm [file_or_directory]</div>`;
    } else {
      const fileToRemove = args[0];
      const index = files.indexOf(fileToRemove);
      if (index !== -1) {
        files.splice(index, 1);
        outputField.innerHTML += `<div>Removed: ${fileToRemove}</div>`;
      } else {
        outputField.innerHTML += `<div>${fileToRemove}: No such file or directory</div>`;
      }
    }
  }

  function changeDirectory(args) {
    if (args.length === 0) {
      outputField.innerHTML += `<div>Usage: cd [directory]</div>`;
    } else {
      const directory = args[0];
      outputField.innerHTML += `<div>Changing directory to: ${directory}</div>`;
    }
  }

  function requestPassword() {
    outputField.innerHTML += `<div>Password: <input type="password" id="password"></div>`;
    const passwordField = document.getElementById('password');
    passwordField.focus();
    passwordField.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        const password = passwordField.value;
        outputField.innerHTML += `<div>Authenticating...</div>`;
        // Здесь можно добавить логику проверки пароля
        setTimeout(function () {
          outputField.innerHTML += `<div>Authentication successful</div>`;
        }, 1000);
      }
    });
  }

  function displayPwd() {
    outputField.innerHTML += `<div>${currentDirectory}</div>`;
  }

  function displayDate() {
    const currentDate = new Date();
    outputField.innerHTML += `<div>${currentDate}</div>`;
  }

  function moveFile(args) {
    if (args.length !== 2) {
      outputField.innerHTML += `<div>Usage: mv [source] [destination]</div>`;
    } else {
      const source = args[0];
      const destination = args[1];
      if (!files.includes(source)) {
        outputField.innerHTML += `<div>${source}: No such file or directory</div>`;
      } else {
        const index = files.indexOf(source);
        files[index] = destination;
        outputField.innerHTML += `<div>Moved: ${source} to ${destination}</div>`;
      }
    }
  }

  const timeEl = document.querySelector('.time');
  const date = new Date();
  timeEl.innerHTML =
    date.toLocaleDateString() +
    ' ' +
    date
      .toLocaleTimeString()
      .slice(0, 5)
      .replace(':', '<span class="time__dots">:</span>');

  setInterval(() => {
    const date = new Date();
    timeEl.innerHTML =
      date.toLocaleDateString() +
      ' ' +
      date
        .toLocaleTimeString()
        .slice(0, 5)
        .replace(':', '<span class="time__dots">:</span>');
  }, 1000);
}
