import React from "react";

const DeliveryPolicy = () => {
  return (
    <div className="pt-24 pb-12 px-4 bg-snap-light">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-snap-dark">
          Xeerka Gaarsiinta & Rarista
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Delivery Policy Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-snap-dark">
              Xeerka Gaarsiinta
            </h2>

            {/* Sections 1–7 (Delivery Policy details) */}
            {/* 1. Processing Time */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                1. Waqtiga Socodsiinta
              </h3>
              <p className="text-snap-gray mb-4">
                Iibsy, waxaan bixinaa platformka onlaynka ah ee ku xidhaya
                iibsadayaasha iyo ganacsatada Somaliland oo dhan. Ganacsatada ku
                jira platformkeenna waxay masuul ka yihiin in ay si degdeg ah u
                habeeyaan dalabada. Guud ahaan, dalabada waxaa la socodsiiyaa
                1-2 maalmood oo shaqo gudahood ka dib xaqiijinta lacag bixinta.
                Si kastaba ha noqotee, waqtiyada socodsiinta waxay ku kala
                duwanaan karaan habdhaqanka gudaha ee ganacsadaha, helitaanka
                kaydka, ama inta lagu jiro muddooyinka mashquulka ah sida
                ciidaha iyo xilliyada waaweyn ee iibka.
                <br />
                Waxaan ku talineynaa in macaamiishu si toos ah ula xidhiidhaan
                ganacsadaha si ay u helaan jadwalada ka sii saxsan ee
                socodsiinta, gaar ahaan iibyadda xasaasiga ah ee waqtiga.
              </p>
            </section>

            {/* 2. Delivery Methods and Timeframes */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                2. Habka Gaarsiinta iyo Mudada
              </h3>
              <p className="text-snap-gray mb-4">
                Habka gaarsiinta iyo waqtiyada la filayo ee gaarsiinta waxaa
                go'aamiya ganacsade kasta si gaar ah iyadoo lala heshiinayo
                macmiilka. Iibsy ma maamulo mana isku dubariddo howlaha
                gaarsiinta. Ganacsatadu waxay bixin karaan dhowr xulasho oo
                gaadhsiinta ah, oo ay ka mid yihiin:
              </p>
              <ul className="list-disc pl-6 text-snap-gray mb-4">
                <li>Qaadista shaqsiga ah ee goob gaar ah</li>
                <li>Gaarsiinta rakaabka deegaanka gudaha Hargeysa</li>
                <li>Heshiis gaar ah oo u dhexeeya ganacsade iyo macmiil</li>
              </ul>
              <p className="text-snap-gray mb-4">
                Waqtiga gaarsiinta waxay ku xidhan tahay habka la doortay,
                helitaanka ganacsadaha, iyo goobta macmiilka. Arrimaha lama
                filaan ah sida xaaladaha cimilada, ciidaha dadweynaha, ama
                carqaladaha gaadiidka ayaa saamayn kara jadwalada gaarsiinta.
                Macmiilada waxaa lagu dhiirrigelinayaa inay kala hadlaan
                filashooyinka gaarsiinta si toos ah ganacsatada ka hor inta
                aysan dhammayn iibkooda.
              </p>
            </section>

            {/* 3. Delivery Costs */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                3. Kharashaadka Gaarsiinta
              </h3>
              <p className="text-snap-gray mb-4">
                Kharashaadka gaarsiinta waxaa si toos ah loogu wada hadlaa
                ganacsadaha iyo macmiilka. Iibsy ma dejiso, ma xakameyso, mana
                dallaco kharashka gaarsiinta. Iyadoo ku xidhan ganacsadaha iyo
                habka gaarsiinta ee la doortay, kharashka waxay ku kala duwanaan
                karaan arrimaha sida masaafo, cabbirka alaabta, miisaanka, iyo
                degdegga gaarsiinta.
                <br />
                Waa muhiim in macaamiisha ay codsadaan faahfaahin cad oo ku
                saabsan kharashka kasta oo gaarsiinta ah oo ka imanaya
                ganacsatada ka hor inta aysan dhammayn lacag bixinta si looga
                fogaado khalad faham.
              </p>
            </section>

            {/* 4. International Delivery */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                4. Gaarsiinta Caalamiga ah
              </h3>
              <p className="text-snap-gray mb-4">
                Iibsy waxay si kooban u fududeysaa macaamillada iyo gaarsiinta
                gudaha Hargeysa, Somaliland. Ganacsatada bixisa rarista
                caalamiga ah waxay sidaas u sameeyaan si madax bannaan.
                Macaamiisha xiisaynaya gaarsiinta caalamiga ah waa inay isku
                dubaridaan dhamaan qorshaynta si toos ah ganacsadaha, oo ay ku
                jiraan heshiisyada ku saabsan kharashaadka dhoofinta, waqtiyada,
                iyo waxkasta oo khuseeya cashuuraha soo dejinta, canshuuraha,
                iyo shuruudaha fasaxa kastamka.
              </p>
              <p className="text-snap-gray mb-4">
                Iibsy ma qaado mas'uuliyadda dib u dhacyada, khidmadaha
                dheeraadka ah, ama dhibaatooyinka ka dhasha sevmis caalami ah.
                Macaamiisha waxaa la boorriyaa inay la socdaan sharciyada
                dalkooda ee ku saabsan soo dejinta iyo habraacyada kastamka ee
                dalkooda kahor inta aynan dhammeyn dalabyada caalamiga ah.
              </p>
            </section>

            {/* 5. Order Tracking */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                5. Raadraacida Dalabka
              </h3>
              <p className="text-snap-gray mb-4">
                Helitaanka raadraacida dalabka waxay ku xiran tahay habka
                gaarsiinta ee la doortay iyo awoodaha ganacsadaha. Ganacsatada
                adeegsada adeegyada gaadiidka la aqoonsanyahay waxay siin karaan
                macaamiisha lambarada raadraacida iyo cusboonaysiinta qiyaasta
                ah ee gaarsiinta.
                <br />
                Gaarsiinta loo habeeyay si gaar ah ama hab maxalli ah,
                macaamiisha waxaa lagu dhiirrigelinayaa inay joogtaynayaan
                xiriirka joogtada ah ee ganacsatada si ay u ogaadaan xaaladda
                gaarsiinta.
              </p>
            </section>

            {/* 6. Delivery Restrictions */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                6. Xadidaadaha Gaarsiinta
              </h3>
              <p className="text-snap-gray mb-4">
                Alaabada qaar ee ku liissan Iibsy waxay yeelan karaan
                xadididaadaha gaarsiinta oo ku salaysan cabbirkooda,
                miisaankooda, jilicnaanta, ama xadididaadaha sharciga. Intaas
                waxaa dheer, ganacsatada qaarkood waxay kaliya bixin karaan
                gaarsiinta aagag gaar ah oo Hargeysa ah ama in qofku si shaqsi
                ah u soo qaato alaabada qaarkood.
                <br />
                Macaamiisha waa inay u caddeeyaan doorshooyinka gaarsiinta
                ganacsatada ka hor inta aysan sameyn iibsi si looga fogaado
                dhibaatooyin aan la filayn.
              </p>
            </section>

            {/* 7. Contact Us */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                7. Nala soo Xiriir
              </h3>
              <p className="text-snap-gray mb-4">
                Iibsy waxay si buuxda u dedaal u gelisaa in ay hubiso khibrad
                suuq oo wanaagsan dhammaan isticmaalayaasha. Haddii aad qabto
                su'aalo, walaacyo, ama dhibaatooyin la xiriira dalabkaaga,
                gaarsiinta, ama xiriirka ganacsada, fadlan la xidhiidh
                kooxdeenna taageerada:
              </p>
              <p className="text-snap-gray">
                <strong>Email:</strong> delivery@iibsy.com
                <br />
                <strong>Telefoon:</strong> +252 (63) 673-0837
              </p>
            </section>
          </section>

          {/* Shipping Policy Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-snap-dark">
              Xeerka Dhoofinta
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Macluumaadka Guud ee Dhoofinta
              </h3>
              <p className="text-snap-gray mb-4">
                Xeerarka dhoofinta waxay ku kala duwanaan karaan ganacsadaha aad
                ka iibsaneyso Iibsy. Inta aan fududeyno liisyada ganacsatada iyo
                isku xirka macaamiisha, si toos ah uma maamulno mana wadno
                adeegyada dhoofinta. Heshiisyada dhoofinta, khidmadaha,
                jadwalada, iyo xeerarka waxaa dejiya ganacsade kasta.
              </p>
              <p className="text-snap-gray mb-4">
                Macaamiisha waxaa lagu talinayaa inay xaqiijiyaan habka
                dhoofinta, waqtiyada la qiyaasay ee gaarsiinta, iyo dhamaan
                kharashka dhoofinta ee ganacsadaha kahor dalabka. Hufnaanta
                marxaladdan waxaa hubisa in labada dhinacba ay fahmaan rajeynta
                dhoofinta.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Kharashka Dhoofinta
              </h3>
              <p className="text-snap-gray mb-4">
                Kharashka dhoofinta waa masuuliyada macmiilka haddii aan si kale
                u sheegin ganacsadaha. Kharashka waxay ku xidhman yihiin nooca
                alaabta, masaafada gaarsiinta, habka dhoofinta, culeyska
                alaabta, iyo degdegga dhoofinta. Ganacsatada qaarkood waxay
                bixin karaan dhiirrigelinta dhoofinta bilaashka ah ama qiimo
                dhimista xaaladaha qaarkood, sida iibsiga ka badan qadarka ugu
                yar.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Kastamka, Waajibaadka, iyo Canshuuraha
              </h3>
              <p className="text-snap-gray mb-4">
                Dalabada caalamiga ah la dhoofiyay, macaamiisha waxay masuul ka
                yihiin bixinta dhammaan waajibaadka kastamka, canshuuraha soo
                dejinta, iyo khidmadaha maaraynta ee loo baahan yahay.
                Ganacsatadu kama masuul aha kharashkaas, wixii diidmo ah ee
                lacag bixinta waxay keeni kartaa in dalabka dib loogu soo
                celiyo, dib loo dhigo, ama la lumiyo. Macaamiishu waa inay la
                tashadaan maamulka kastamada deegaanka si ay u helaan hagid
                kahor iibka caalamiga ah.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Dhoofinta Lumay ama Waxyeelaysan
              </h3>
              <p className="text-snap-gray mb-4">
                Kiisaska dhoofinta lumay ama waxyeelaysan, macaamiisha waa inay
                isla markiiba la xiriiraan ganacsadaha iyo, haddii ay khusayso,
                gaadiidka qaada. Ganacsatada adeegsada adeegyada gaadiidka la
                yaqaan badiba waxay siiyaan caymiska iyo adeegyada raadraacida.
                Iibsy waxay ku dhiirrigelisaa dhammaan macaamiisha iyo
                ganacsatada inay ilaaliyaan xiriir cad oo ay si degdeg ah u
                xaliyaan arrimaha la xiriira dhoofinta.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Taariikhaha la Qiyaasay ee Gaarsiinta
              </h3>
              <p className="text-snap-gray mb-4">
                Taariikhaha la qiyaasay ee gaarsiinta waxaa bixiya ganacsadaha
                iyo/ama shirikada gaadiidka mana la damaanad qaado. Dhacdooyinka
                aan la filayn sida xaaladaha cimilada, shaqo joojinta, ama
                carqaladaha gaadiidka ayaa saameyn kara waqtiyada gaarsiinta.
                Fadlan u ogolow waqti dheeraad ah inta lagu jiro xilliyada
                mashquulka sida Ramadaan, Ciid, ama fasaxyada dhammaadka
                sanadka.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                La Xiriir Wixii Su'aalo Ah Ee Ku Saabsan Dhoofinta
              </h3>
              <p className="text-snap-gray mb-4">
                Wixii su'aalo gaar ah oo ku saabsan xeerarka dhoofinta,
                waqtiyada la qiyaasay, kharashka dhoofinta, ama nidaamyada
                kastamada, fadlan si toos ah ula xiriir ganacsadaha. Haddii
                caawimaad dheeraad ah loo baahdo, waxaad sidoo kale la xiriiri
                kartaa kooxda taageerada macaamiisha ee Iibsy.
              </p>
              <p className="text-snap-gray">
                <strong>Email:</strong> support@iibsy.com
                <br />
                <strong>Telefoon:</strong> +252 (63) 673-0837
              </p>
            </section>
          </section>
        </div>

        <p className="text-snap-gray text-sm mt-6 text-center">
          La cusboonaysiiyay: Abriil 26, 2025
        </p>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
