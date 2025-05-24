import { Dua } from "./types";
import { Sunrise, Utensils, Plane, Feather } from "lucide-react";

export const categories = [
  {
    name: "Morning and Night Duas",
    icon: <Sunrise />,
    cap: "Start your day and night with remembrance and protection.",
    url: ""
  },
  {
    name: "Before and After Eating",
    icon: <Utensils />,
    cap: "Remember Allah before and after meals.",
  },
  {
    name: "Travel Duas",
    icon: <Plane />,
    cap: "Stay safe and protected while on the move.",
  },
  {
    name: "Duas for Forgiveness",
    icon: <Feather />,
    cap: "Ask for Allah's mercy and pardon.",
  },
];

export const dayduas: Dua[] = [
  {
    title: "Morning and Evening Remembrance",
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Allahumma bika amsaynaa, wa bika asbahnaa, wa bika nahyaa, wa bika namootu, wa ilaykal-maseer",
    translation:
      "O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning. By Your leave we live and die and unto You is our return.",
    reference: "Sunan Abi Dawud 5068",
  },
  {
    title: "Sayyidul Istighfar",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration:
      "Allahumma anta Rabbi, laa ilaaha illaa anta, khalaqtani wa ana abduka, wa ana ‘alaa ‘ahdika wa wa‘dika mastata‘t, a‘oodhu bika min sharri maa sana‘t, aboo’u laka bini‘matika ‘alayya, wa aboo’u bidhanbi, faghfir lee, fa innahu laa yaghfirudh-dhunooba illaa anta.",
    translation:
      "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I abide to Your covenant and promise as best I can. I seek refuge in You from the evil I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for surely none forgives sins except You.  (Whoever says it in the morning with certainty and dies before evening will be admitted to Paradise. - Prophet Muhammad peace be upon him.)",
    reference: "Sahih al-Bukhari 6306",
  },
  {
    title: "Ayat al-Kursi",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
    transliteration: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum...",
    translation:
      "Allah – there is no deity except Him, the Ever-Living, the Sustainer of [all] existence...",
    reference:
      "Qur’an 2:255 (Hadith: Reciting it in the morning protects you till evening – al-Nasa’i)",
  },
  {
    title: "Three Quls (3x each)",
    arabic:
      "Surah Ikhlas: قُلْ هُوَ اللَّهُ أَحَدٌ... Surah Falaq: قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... Surah Nas: قُلْ أَعُوذُ بِرَبِّ النَّاسِ...",
    transliteration: "",
    translation: "",
    reference: "Sunan al-Tirmidhi 3575 (Protection from harm until evening)",
  },
  {
    title: "Dua for Protection from Harm",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    transliteration:
      "Allahumma inni as’aluka al-‘aafiyata fid-dunya wal-akhirah",
    translation:
      "O Allah, I ask You for well-being in this world and the Hereafter.",
    reference: "Sunan Ibn Majah 3871",
  },
  {
    title: "Dua for Evening Peace",
    arabic:
      "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ...",
    transliteration:
      "ma inni amsaytu ush-hiduka, wa ush-hidu hamalata 'arshik...",
    translation:
      "O Allah, I have reached the evening and I call You to witness, and I call the bearers of Your Throne... that You are Allah, none has the right to be worshipped except You...",
    reference: "Sunan Abi Dawud 5069",
  },
];

export const eatingduas: Dua[] = [
  {
    title: "Dua Before Eating",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah.",
    reference:
      "Reference: Sahih al-Bukhari 5376(If one forgets to say it before eating, say the next dua)",
  },
  {
    title: "If You Forget to Say Bismillah",
    arabic: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
    transliteration: "Bismillahi awwalahu wa aakhirahu",
    translation: "In the name of Allah at the beginning and at the end.",
    reference: "Sunan Abi Dawud 3767",
  },
  {
    title: "Dua After Eating",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration:
      "Alhamdu lillaahil-lathee at‘amani haadha, wa razaqanihi min ghayri hawlin minnee wa laa quwwah",
    translation:
      "Praise be to Allah Who has fed me this and provided it for me without any strength or power from myself.",
    reference: "Jami` at-Tirmidhi 3458",
  },
  {
    title: "Another Dua After Eating",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَ وَسَقَى، وَسَوَّغَهُ، وَجَعَلَ لَهُ مَخْرَجًا",
    transliteration:
      "Alhamdu lillaahil-lathee at‘ama wa saqaa, wa sawwaghahu, wa ja‘ala lahu makhrajan",
    translation:
      "Praise be to Allah Who fed and gave drink, and made it easy to swallow, and provided an exit for it.",
    reference: "Sunan Abi Dawud 3851",
  },
];

export const travelduas: Dua[] = [
  {
    title: "Dua When Starting a Journey or Riding a Vehicle",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
    transliteration: "Subhaanalladhee sakhkhara lanaa haadha wa maa kunnaa lahu muqrineen, wa innaa ilaa Rabbinaa lamunqaliboon",
    translation: "Glory is to Him Who has subjected this to us, and we could never have it [by our efforts]. And indeed, to our Lord we will surely return.",
    reference: "Qur'an – Surah Az-Zukhruf (43:13–14), Hadith: Sahih Muslim 1342a",
  },
  {
    title: "Complete Travel Dua (includes the above and more)",
    arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَىٰ، وَمِنَ الْعَمَلِ مَا تَرْضَى...",
    transliteration: "Allahumma innaa nas’aluka fee safarinaa haadhal birra wat-taqwaa, wa minal ‘amali maa tardhaa...",
    translation: "O Allah, we ask You for righteousness and piety in this journey, and for deeds that please You...",
    reference: "Sahih Muslim 1342a",
  },
  {
    title: "Dua Upon Returning From a Journey",
    arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
    transliteration: "Aa’iboon, taa’iboon, ‘aabidoon, li-Rabbinaa haamidoon",
    translation: "We return, repentant, worshipping, and praising our Lord.",
    reference: "Sahih Muslim 1342b",
  },
];

export const houseduas: Dua[] = [
  {
    title: "Dua When Entering the House",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa ‘ala Allaahi Rabbinaa tawakkalnaa",
    translation: "In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we place our trust.",
    reference: "Sunan Abi Dawud 5096 (When said, Shaytan says: There is no lodging for you and no dinner.)",
  },
  {
    title: "Another Version (Simple)",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah",
    reference: "Sunan Abi Dawud 5096 (Sufficient if said when entering the house)",
  },
  {
    title: "Dua When Leaving the House",
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "Bismillaah, tawakkaltu ‘ala Allaah, wa laa hawla wa laa quwwata illaa billaah",
    translation: "In the name of Allah, I place my trust in Allah, and there is no power nor might except with Allah.",
    reference: "Sunan Abi Dawud 5095 (One is protected, guided, and defended)",
  },
];

export const masjidduas: Dua[] = [
  {
    title: "Dua When Entering the Masjid",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma iftah lee abwaaba rahmatik",
    translation: "O Allah, open for me the doors of Your mercy.",
    reference: "Sahih Muslim 713a",
  },
  {
    title: "Dua When Leaving the Masjid",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma innee as’aluka min fadlik",
    translation: "O Allah, I ask You from Your bounty.",
    reference: "Sahih Muslim 713b",
  },
];