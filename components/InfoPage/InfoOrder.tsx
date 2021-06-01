import ContentContainer from '../ContentContainer/ContentContainer';

import styles from './InfoPage.module.scss';

const InfoOrder = (): JSX.Element => (
  <section className={styles.info}>
    <ContentContainer>
      <h2 className={styles.info__header}>
        Последовательность разработки научно-проектной документации
      </h2>
      <div className={styles.info__columns}>
        <div>
          <p>
            <strong>Комплексные историко-культурные исследования</strong> –
            комплекс архивных, библиографических, натурных и иных исследований,
            проводимых в целях выявления историко-культурных характеристик и
            ценности элементов градостроительной среды. В процессе проведения
            исследований выявляется время возникновения и обстоятельства
            формирования градостроительной среды и ее элементов, их авторство,
            стилистические и прочие художественные характеристики, мемориальные
            сведения, степень сохранности. На основе выявленных данных делается
            вывод об историко-культурной ценности исследуемого объекта,
            обобщающий их художественные, историко-мемориальные и прочие
            особенности.
          </p>
          <p>
            В зонах охраняемого культурного слоя, зонах охраны объектов
            археологического наследия, на территориях, в пределах которых
            располагаются объекты археологического наследия, на основании{' '}
            <em>
              Федерального закона «Об объектах культурного наследия (памятниках
              истории и культуры) народов Российской Федерации» № 73-ФЗ от 25
              июня 2002 г.
            </em>
            , статья 36, в составе проектной документации необходима разработка
            охранного археологического раздела, а также проведение спасательных
            натурных археологических исследований в соответствии с данным
            разделом.
          </p>
          <p>
            Историко-культурные исследования выполняются в составе предпроектных
            исследований для обоснования проектной деятельности в области охраны
            культурного наследия и в области градостроительного регулирования.
          </p>
        </div>
        <div>
          <p>
            Объектом историко-культурных исследований могут стать любые объекты
            недвижимости (элементы градостроительной структуры) – территории,
            комплексы застройки, отдельные здания и сооружения, вне зависимости
            от действующего режима их охраны и формы собственности.
          </p>
          <p>
            Объект исследования определяется в зависимости от задач
            историко-культурных исследований. Объектом исследования могут
            являться:
          </p>
          <ul>
            <li>территория поселения в целом;</li>
            <li>
              административно-территориальные единицы (административный округ,
              территориальный район и др.);
            </li>
            <li>
              фрагменты городской структуры (группа кварталов, квартал или его
              часть, городской ансамбль: улица, площадь,
              архитектурно-ландшафтный комплекс);
            </li>
            <li>домовладение (основной первичный объект исследований).</li>
          </ul>
          <p>
            Изучению подлежат все исторические владения, полностью или частично
            располагавшиеся на исследуемой территории. Элементы застройки
            (строения и сооружения) рассматриваются в рамках домовладения.
            Элемент застройки может рассматриваться как самостоятельный объект
            исследования только в случае, когда историко-культурные исследования
            проводятся в целях <em>определения охранного статуса</em> объекта
            недвижимости и при разработке <em>предмета охраны</em> объекта
            культурного наследия.
          </p>
        </div>
      </div>
      <h3 className={styles.info__subheader}>
        Порядок проведения историко-культурных исследований
      </h3>
      <div className={styles.info__columns}>
        <ul>
          <li>
            предварительные (ознакомление с заданием Заказчика и предъявленной
            им документацией, ознакомление с проектной, исследовательской,
            охранной документацией в организациях соответствующего профиля,
            предварительное ознакомление с объектом исследования в натуре,
            корректировка подосновы, нанесение текущих изменений, определение
            физического объема и границ объекта исследования, предварительное
            изучение литературных и графических источников);
          </li>
          <li>
            архивные и библиографические исследования (выявление и изучение в
            архивных и библиотечных фондах графических, текстовых и
            изобразительных документов по истории формирования и развития
            объекта исследования; составление списка документов, подлежащих
            репродуцированию или копированию: репродуцирование и копирование
            документов, а также изготовление копий на электронных носителях,
            осуществляются в рамках субподрядных работ, как правило, на
            технической базе архивов, музеев и библиотек);
          </li>
          <li>
            натурные исследования (визуальное обследование объекта, фотофиксация
            объекта и его градостроительного окружения, в случае необходимости,
            по особому заданию заказчика - выполнение схематических обмеров);
          </li>
        </ul>
        <div>
          <ul>
            <li>
              научно-аналитические работы (анализ и систематизация результатов
              изыскательской деятельности, в том числе выявленной документации и
              результатов натурных исследований, разработка графических схем и
              текстового материала, содержащих анализ исторических этапов
              формирования и историко-культурную характеристику по основным
              направлениям исследований);
            </li>
            <li>
              формирование выводов историко-культурных исследований (разработка
              графических схем и текстового материала, содержащих выводы
              историко-культурных исследований объекта и предложения по
              изменению категории его историко-культурной значимости);
            </li>
            <li>
              составление учетной документации (заполнение информационно-учетных
              форм по объекту исследования и его отдельным элементам).
            </li>
          </ul>
          <p>
            Объем и виды работ по каждому из направлений зависит от особенностей
            объекта и его изученности, а также от целевого назначения
            историко-культурных исследований. При необходимости для определения
            состава историко-культурных исследований разрабатывается Техническое
            задание.
          </p>
        </div>
      </div>
      <h3 className={styles.info__subheader}>Исходные данные</h3>
      <div className={styles.info__columns}>
        <div>
          <p>
            Необходимым условием проведения историко-культурных исследований
            является получение ряда исходных данных, составляющих официальную
            информацию органов исполнительной власти и уполномоченных
            организаций:
          </p>
          <ul>
            <li>
              сведения Государственного реестра объектов культурного наследия;
            </li>
            <li>
              сведения об утвержденном предмете охраны объекта культурного
              наследия;
            </li>
            <li>
              местоположение объектов культурного наследия и иных
              градостроительных элементов, представляющих собой
              историко-культурную ценность;
            </li>
            <li>
              границы территорий объектов культурного наследия федерального,
              регионального и местного значения;
            </li>
            <li>
              границы зон охраны объектов культурного наследия федерального,
              регионального и местного значения;
            </li>
          </ul>
        </div>
        <ul>
          <li>
            линии градостроительного регулирования и иные границы зон с особыми
            условиями использования территорий;
          </li>
          <li>
            данные о кадастровом делении территории, о границах существующих
            земельных отводов, планы межевания территорий;
          </li>
          <li>
            информация о ранее утвержденной документации градостроительного
            проектирования (при необходимости);
          </li>
          <li>
            распорядительная документация органов государственной и местной
            власти по вопросам проектирования на участках, входящих в границы
            разработки (при необходимости);
          </li>
          <li>
            технические паспорта и схемы границ земельных участков домовладений
            в масштабе 1:500, входящих в состав объекта исследования;
          </li>
          <li>
            технические паспорта и планы этажей в масштабе 1:200 всех строений,
            входящих в состав объекта исследования.
          </li>
        </ul>
      </div>
      <blockquote className={styles.info__quote}>
        Выдержки из «Методических указаний по проведению комплексных
        историко-культурных исследований», НПО-38 ГУП «НИ и ПИ Генплана Москвы»,
        2009 г.
      </blockquote>
    </ContentContainer>
  </section>
);

export default InfoOrder;
