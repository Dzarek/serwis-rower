import {
  MdDirectionsBike,
  // MdShoppingBasket,
  MdPerson,
  MdMail,
  MdHome,
  MdElectricBike,
} from "react-icons/md";
import { TiSpannerOutline, TiSpanner } from "react-icons/ti";
import { GiNewspaper } from "react-icons/gi";
export const navlinks = [
  {
    name: "Strona Główna",
    link: "home",
    icon: <MdHome />,
  },
  {
    name: "Serwis Rowerowy",
    link: "bikeService",
    icon: <TiSpanner />,
  },
  {
    name: "Wypożyczalnia E-BIKE",
    link: "rentbike",
    icon: <MdElectricBike />,
  },
  // {
  //   name: "Serwis Narciarski",
  //   link: "skiService",
  //   icon: <TiSpannerOutline />,
  // },
  // {
  //   name: "Akcesoria",
  //   link: "accesories",
  //   icon: <MdShoppingBasket />,
  // },
  {
    name: "O nas",
    link: "aboutMe",
    icon: <MdPerson />,
  },
  {
    name: "Treningi",
    link: "workout",
    icon: <MdDirectionsBike />,
  },
  {
    name: "Aktualności",
    link: "news",
    icon: <GiNewspaper />,
  },
  {
    name: "Kontakt",
    link: "contact",
    icon: <MdMail />,
  },
];

export const bikePrices = [
  {
    id: 1,
    title: "Napęd",
    image: "/images/bikeService/bike/naped.png",
    details: [
      {
        info: "wymiana mechanizmu korbowego/suportu",
        price: "40",
      },
      {
        info: "wymiana łańcucha, kasety",
        price: "25",
      },
      {
        info: "wymiana kompletnego napędu",
        price: "60",
      },
      {
        info: "mycie oraz smarowanie napędu",
        price: "60",
      },
      {
        info: "woskowanie łańcucha",
        price: "50",
      },
    ],
  },
  {
    id: 2,
    title: "Koła",
    image: "/images/bikeService/bike/kola.png",
    details: [
      {
        info: "centrowanie",
        price: "20-50",
      },
      {
        info: "zaplatanie",
        price: "80",
      },
      {
        info: "serwis piasty",
        price: "40",
      },
      {
        info: "wymiana dętki/opony",
        price: "15",
      },
      {
        info: "montaż opon tubeless",
        price: "35",
      },
    ],
  },
  {
    id: 3,
    title: "Amortyzacja",
    image: "/images/bikeService/bike/amortyzatory.png",
    details: [
      {
        info: "przegląd podstawowy amortyzatora sprężynowego (czyszczenie, wymiana smaru)",
        price: "120",
      },
      {
        info: "przegląd amortyzatora olejowego (czyszczenie, wymiana smarów oraz oleju)",
        price: "200",
      },
    ],
  },
  {
    id: 4,
    title: "Hamulce",
    image: "/images/bikeService/bike/hamulce.png",
    details: [
      {
        info: "regulacja hamulca",
        price: "25",
      },
      {
        info: "wymiana okładzin (V-brake)",
        price: "10",
      },
      {
        info: "wymiana okładzin (disc)",
        price: "30",
      },
      {
        info: "wymiana linki + pancerza",
        price: "20",
      },
      {
        info: "odpowietrzanie hamulca",
        price: "40",
      },
    ],
  },
  {
    id: 5,
    title: "Układ sterowania",
    image: "/images/bikeService/bike/sterowanie.png",
    details: [
      {
        info: "wymiana sterów kierownicy",
        price: "50",
      },
      {
        info: "montaż elementów kokpitu",
        price: "30",
      },
      {
        info: "kasowanie luzów, regulacja sterów",
        price: "25",
      },
    ],
  },
  {
    id: 6,
    title: "Inne",
    image: "/images/bikeService/bike/caly.png",
    details: [
      {
        info: "montaż akcesoriów dodatkowych",
        price: "10 - 100",
      },
      {
        info: "mycie roweru",
        price: "70",
      },
      {
        info: "montaż roweru od podstaw",
        price: "150 - 700",
      },
      {
        info: "montaż roweru złożonego do wysyłki",
        price: "100",
      },
    ],
  },
];

export const skiPrices = [
  {
    id: 1,
    name: "smarowanie na gorąco",
    price: "45 zł",
    details: "smarowanie, cyklinowanie + szczotkowanie",
  },
  {
    id: 2,
    name: "ostrzenie krawędzi",
    price: "65 zł",
    details: "ostrzenie na zadany kąt",
  },
  {
    id: 3,
    name: "ostrzenie krawędzi + smarowanie",
    price: "95 zł",
    details: "",
  },
  {
    id: 4,
    name: "średni serwis",
    price: "140 zł",
    details: "wycięcie struktury na ślizgu, ostrzenie + smarowanie",
  },
  {
    id: 5,
    name: "duży serwis - narty",
    price: "180 - 200 zł",
    details:
      "planowanie ślizgu, uzupełnienie ubytków, ostrzenie krawędzi z podniesieniem na zadane kąty, wycięcie struktury, smarowanie",
  },
  {
    id: 6,
    name: "duży serwis - snowboard",
    price: "190 - 210 zł",
    details: "",
  },
  {
    id: 7,
    name: "wygrzewanie nart w thermo boxie",
    price: "125 zł",
    details:
      "komora grzewcza Briko - Maplus, 24 godzinne nasączanie ślizgów smarem SWIX BP 99 + smarowanie końcowe",
  },
  {
    id: 8,
    name: "regulacja wiązań",
    price: "25 - 35 zł",
    details: "na podstawie tabel sił wypięcia DIN",
  },
  {
    id: 9,
    name: "montaż i regulacja wiązań",
    price: "70 zł",
    details: "",
  },
  {
    id: 10,
    name: "montaż i regulacja z wierceniem otworów montażowych",
    price: "120 - 150 zł",
    details: "",
  },
];

export const blogArticles = [
  {
    id: 1,
    date: "10.11.2022",
    title: "prezent dla roweru",
    image: "/images/blog/prezentRower.jpg",
    text: [
      "Okres jesienno zimowy to najlepszy czas na prezenty dla twojego roweru. Czasem wielkie zmiany, czasem małe detale, a może po prostu gruntowny serwis.",
    ],
  },
  {
    id: 2,
    date: "7.11.2022",
    title: "podsumowanie sezonu 2022",
    image: "/images/blog/podsumowanieSezonu.jpg",
    text: [
      "No i kolejny sezon na rowerze zatoczył koło. Pogoda powoli zaczyna wracać na normalne tory skutecznie wspomagając odpoczynek i rowerowy reset 😁🍂  Czas więc przynajmniej krótko podsumować sezon 2022 pod kątem sportowo-kolarskim.",
      "Rok ten niewątpliwie był dla Nas wyjątkowy i wiadome było że taki będzie. Po raz pierwszy zaczęliśmy go w Trójkę🙂 Był to też rok w którym tworzyliśmy coś nowego- VeloWay Pracownia Rowerów a także kolejny rok intensywnej pracy trenerskiej jako Cyclo Trener. Niewątpliwie zmiany jakie zachodziły wymagały sporego zaangażowania i czasu, toteż pogodzenie tego z czynnym uprawianiem amatorskiego, ale jednak sportu było sporym wyzwaniem. Mimo wszystko dystans i spokój pozwoliły wypracować całkiem niezły poziom sportowy dający możliwość meldować się z przodu stawki w krajowych cyklach maratonów MTB , a we wrześniu W Bardzie Śląskim zdobyć brąz na Mistrzostwach Polski w Maratonie jako pierwszoroczny Masters 😉💪.",
      "Trzeba szczerze przyznać, że godzenie codzienności z treningiem okupione było momentami bardzo dużym zmęczeniem, co czasem mocno odbijało się na możliwościach sportowych, ale bardzo mnie cieszy, że w tym wszystkim nie ma żadnej zewnętrznej presji i tak naprawdę mogę cieszyć się uprawianiem kolarstwa, a cele leżą tam, gdzie sam sobie je wyznaczę.",
      "Niewątpliwie olbrzymią częścią formy oraz wyników jakie wypracowałem są ❤️Sylwia i Marcelina❤️ które umożliwiły i dzielnie znosiły czasem kilkugodzinne poranne wypady treningowe.",
      "Jak w każdym takim podsumowaniu tak i tutaj chce podziękować wszystkim który choć trochę ułatwiają uprawianie kolarskiego sportu, a więc:",
      "Daniel Paszek którego treningowe spojrzenie z dystansu pozwala znaleźć równowagę pomiędzy ciężkim treningiem codziennością i regeneracją.",
      "Całej ekipie Cyclo Trener Team za wsparcie logistyczno finansowe a w szczególności chłopakom Maciej oraz Marcin z którymi wspólnie ruszaliśmy na weekendowe wyścigi - z taką ekipą nawet Cape Epic nie straszny 💪😀",
      "Cannondale Polska wraz z Aspire Sport za wsparcie sprzętowe. Większość z nas ma marki oraz technologie które lubi i do których czuje sentyment dla mnie niewątpliwie jest to Cannondale i jezda na tym sprzęcie daje mi mnóstwo radości.",
      "Dziękuję wszystkim kibicującym i wspierającym, szczególnie rodzinie i znajomym, bardzo miło wiedzieć że moja działalność sportowa kogoś interesuje 🙂🙃😉",
    ],
  },
  {
    id: 3,
    date: "22.10.2022",
    title: "piasta wielobiegowa Kindernay",
    image: "/images/blog/piasta.jpg",
    text: [
      "Nieszablonowe i rzadkie rozwiązania na serwisie zawsze wzbudzają zachwyt i zaciekawienie. Tym razem zagościła u nas piasta wielobiegowa norweskiej marki Kindernay Mechanizm zamontowany jest w „klatce” która umożliwia sprawne żąglowanie między kołami, piasta wyposażona w sprzęgło które czyni indeksację subtelną a całość sterowana jest hydraulicznie za pomocą aluminiowej manetki o niebanalnym kształcie. Zestaw ten montowaliśmy w mocno customowym rowerze elektrycznym niemieckiej manufaktury Exess co stworzyło sprzęt do walki z najcięższym górskim terenem.",
    ],
  },
];

export const plans = [
  {
    id: 1,
    name: "competition",
    info: [
      "Plan treningowy aktualizowany co 7 dni",
      "Dziennik treningowy Training Peaks Basic",
      "Kontakt: telefoniczny, e-mail, messenger",
      "Program treningu na siłowni dla kolarzy",
      "Analiza profilów mocy, diagnostyka i wyznaczanie celów",
      "Analiza treningu na podstawie danych z miernika mocy i pulsometru",
    ],
    price: "380 zł/m",
  },
  {
    id: 2,
    name: "professional",
    info: [
      "Plan treningowy aktualizowany co 7 dni",
      "Dziennik treningowy Training Peaks Premium",
      "Analiza treningu rozbudowana WKO5",
      "Kontakt: telefoniczny, e-mail, messenger",
      "Program treningu na siłowni dla kolarzy",
      "Analiza profilów mocy, diagnostyka i wyznaczanie celów",
      "Analiza treningu na podstawie danych z miernika mocy i pulsometru",
    ],
    price: "550 zł/m",
  },
];

export const ebike = [
  {
    id: 1,
    title: "zapoznaj się z regulaminem",
    info: [
      "Tutaj znajdziesz regulamin wynajmu roweru elektrycznego.",
      "Przeczytaj go i przejdź do następnego kroku.",
    ],
  },
  {
    id: 2,
    title: "aktualna cena: 250 zł/dzień",
    info: [
      "DEVINCI E-Troy GX M(wzrost 170-180cm) lub L (180-190cm)",
      "250 zł/dzień",
      "Pobieramy kaucję zwrotną w wysokości 500 zł za rower. Można zapłacić przelewem na konto, gotówką lub kartą przy odbiorze roweru. Kaucja jest zwracana tą samą formą płatności.",
      "*Jednodniowe wypożyczenie roweru obejmuje godziny 8:00-19:00",
    ],
  },
  {
    id: 3,
    title: "rezerwacja roweru",
    info: [
      "Rezerwacji roweru dokonasz telefonicznie lub na miejscu.",
      "Rozmiar dobierzemy po podaniu wzrostu i wagi dla każdej osoby wynajmującej rower.",
    ],
  },
  {
    id: 4,
    title: "opłać rezerwację roweru",
    info: [
      "Po otrzymaniu od nas potwierdzenia dostępności rowerów w wybranym przez Ciebie rozmiarze i terminie możesz opłacić przelewem swoją rezerwację wraz z kaucją podając w tytule przelewu numer otrzymanej od nas rezerwacji.",
      "Możesz zapłacić także kartą lub gotówką na miejscu.",
    ],
  },
  {
    id: 5,
    title: "odbierz sprzęt",
    info: [
      "Rowery możesz bezpłatnie odebrać w wypożyczalni w VeloWay Pracownia Rowerów Piotr Sajdak, ul. Długa 48, 33-170 Tuchów.",
      "Rowery możemy dla Ciebie dowieźć w wybrane miejsce w cenie 30 zł w promieniu 20 km (+2 zł za każdy dodatkowy kilometr).",
      "Sprzęt przekażemy po potwierdzeniu Twojej tożsamości (miej ze sobą dokument ze zdjęciem), podpisaniu umowy i przekazaniu kaucji.",
      "Odbiór sprzętu równoznaczny jest z akceptacją całości Regulaminu.",
    ],
  },
  {
    id: 6,
    title: "Zwrot rowerów",
    info: [
      "Rowery możesz zwrócić w godzinach pracy wypożyczalni. lub zgodnie z ustalonym wcześniej terminem.",
      "Pamiętaj, aby zadzwonić wcześniej i uprzedzić o godzinie zwrotu!",
    ],
  },
];

export const ebikeTitle = "Wypożyczalnia E-BIKE";
export const ebikeSubtitle =
  "Wypożyczamy rowery górskie premium Marki DEVINCI E-Troy GX w rozmiarach M i L. Rowery napędzane niezawodnym silnikiem Shimano EP8. Zapas energii zapewnia bateria o pojemności 725Wh pozwalająca na zasięg roweru 30-100km.";
