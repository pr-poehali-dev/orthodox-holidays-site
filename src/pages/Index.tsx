import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const holidays = [
    {
      id: 1,
      name: 'Рождество Христово',
      date: '7 января',
      type: 'Великий праздник',
      description: 'Рождество Христово — один из главнейших христианских праздников, установленный в честь рождения Иисуса Христа от Девы Марии.',
      traditions: 'В этот день православные христиане посещают праздничное богослужение, разговляются после поста, собираются семьями за праздничным столом.',
      history: 'Праздник Рождества Христова был установлен Церковью в первые века христианства. Дата празднования 7 января связана с использованием юлианского календаря.'
    },
    {
      id: 2,
      name: 'Крещение Господне',
      date: '19 января',
      type: 'Великий праздник',
      description: 'Крещение Господне (Богоявление) — праздник, установленный в память крещения Иисуса Христа Иоанном Крестителем в реке Иордан.',
      traditions: 'В Крещенский сочельник и в сам день Крещения совершается Великое освящение воды. Верующие окунаются в прорубь (иордань), набирают святую воду.',
      history: 'Праздник известен с апостольских времен. В этот день произошло явление всех Лиц Святой Троицы: Бог Отец свидетельствовал с небес о Сыне, Сын крестился, Дух Святой сошел на Него в виде голубя.'
    },
    {
      id: 3,
      name: 'Пасха Христова',
      date: 'Переходящий праздник',
      type: 'Праздник праздников',
      description: 'Светлое Христово Воскресение, Пасха — главный праздник православного церковного года, установленный в честь Воскресения Иисуса Христа из мёртвых.',
      traditions: 'Пасхальное богослужение, освящение куличей и яиц, приветствие "Христос воскресе!" — "Воистину воскресе!", разговление после Великого поста.',
      history: 'Праздник Пасхи — древнейший христианский праздник. Дата празднования определяется по лунно-солнечному календарю и приходится на первое воскресенье после первого весеннего полнолуния.'
    },
    {
      id: 4,
      name: 'Благовещение Пресвятой Богородицы',
      date: '7 апреля',
      type: 'Великий праздник',
      description: 'Благовещение — праздник, установленный в воспоминание возвещения Архангелом Гавриилом Деве Марии о будущем рождении Иисуса Христа.',
      traditions: 'В этот день принято отпускать на волю птиц как символ благой вести. Совершается праздничное богослужение.',
      history: 'Событие Благовещения описано в Евангелии от Луки. Праздник был установлен в IV веке и празднуется за девять месяцев до Рождества Христова.'
    },
    {
      id: 5,
      name: 'Вход Господень в Иерусалим',
      date: 'За неделю до Пасхи',
      type: 'Двунадесятый праздник',
      description: 'Вербное воскресенье — праздник входа Господня в Иерусалим, который празднуется в воскресенье за неделю до Пасхи.',
      traditions: 'Освящение вербы и распускающихся веточек других деревьев в храмах. Верующие приносят освященные веточки домой.',
      history: 'Праздник установлен в память торжественного входа Иисуса Христа в Иерусалим, где народ встречал Его с пальмовыми ветвями.'
    }
  ];

  const prayers = [
    {
      id: 1,
      name: 'Отче наш',
      churchSlavonic: 'О́тче на́шъ, И́же еси́ на небесѣ́хъ! Да святи́тся и́мя Твое́, да прі́́идетъ ца́рствіе Твое́, да бу́детъ во́ля Твоя́, я́ко на небеси́ и на земли́. Хлѣ́бъ на́шъ насу́щный да́ждь на́мъ дне́сь; и оста́ви на́мъ до́лги на́ша, я́коже и мы́ оставля́емъ должнико́мъ на́шымъ; и не введи́ на́съ во искуше́ніе, но изба́ви на́съ отъ лука́ваго.',
      russian: 'Отче наш, Иже еси на небесех! Да святится имя Твое, да приидет Царствие Твое, да будет воля Твоя, яко на небеси и на земли. Хлеб наш насущный даждь нам днесь; и остави нам долги наша, якоже и мы оставляем должником нашим; и не введи нас во искушение, но избави нас от лукавого.',
      type: 'Главная молитва'
    },
    {
      id: 2,
      name: 'Богородице Дево, радуйся',
      churchSlavonic: 'Богоро́дице Дѣ́во, ра́дуйся, Благода́тная Маріе́, Госпо́дь съ Тобо́ю; благослове́на Ты́ въ жена́хъ, и благослове́нъ Пло́дъ чре́ва Твоего́, я́ко Спа́са родила́ еси́ ду́шъ на́шихъ.',
      russian: 'Богородице Дево, радуйся, Благодатная Марие, Господь с Тобою; благословена Ты в женах, и благословен Плод чрева Твоего, яко Спаса родила еси душ наших.',
      type: 'Богородичная молитва'
    },
    {
      id: 3,
      name: 'Символ веры',
      churchSlavonic: 'Вѣ́рую во еди́наго Бо́га Отца́, Вседержи́теля, Творца́ не́бу и земли́, ви́димымъ же всѣ́мъ и неви́димымъ. И во еди́наго Го́спода Іису́са Христа́, Сы́на Бо́жія, Единоро́днаго, И́же отъ Отца́ рожде́ннаго пре́жде всѣ́хъ вѣ́къ...',
      russian: 'Верую во единаго Бога Отца, Вседержителя, Творца небу и земли, видимым же всем и невидимым. И во единаго Господа Иисуса Христа, Сына Божия, Единороднаго, Иже от Отца рожденнаго прежде всех век...',
      type: 'Исповедание веры'
    }
  ];

  const fasts = [
    {
      id: 1,
      name: 'Великий пост',
      period: '7 недель перед Пасхой',
      type: 'Строгий пост',
      description: 'Самый продолжительный и строгий пост в году, установленный в память сорокадневного поста Спасителя в пустыне.',
      rules: 'Исключается пища животного происхождения (мясо, молоко, яйца). В будние дни — сухоядение, в субботу и воскресенье — горячая пища с растительным маслом.'
    },
    {
      id: 2,
      name: 'Рождественский пост',
      period: '28 ноября — 6 января',
      type: 'Умеренный пост',
      description: 'Пост установлен для подготовки к празднику Рождества Христова.',
      rules: 'До праздника святителя Николая (19 декабря) — рыба в субботу и воскресенье. После — рыба только в праздники и выходные.'
    },
    {
      id: 3,
      name: 'Успенский пост',
      period: '14 августа — 27 августа',
      type: 'Строгий пост',
      description: 'Двухнедельный пост перед праздником Успения Пресвятой Богородицы.',
      rules: 'Устав поста приближен к Великому посту. На Преображение (19 августа) разрешается рыба.'
    },
    {
      id: 4,
      name: 'Петров пост',
      period: 'От недели после Пятидесятницы до 12 июля',
      type: 'Умеренный пост',
      description: 'Пост установлен в честь святых апостолов Петра и Павла.',
      rules: 'Рыба разрешается во все дни, кроме среды и пятницы. В среду и пятницу — сухоядение.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Cross" size={32} className="text-accent" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary">Православные Праздники</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#holidays" className="text-sm font-medium hover:text-accent transition-colors">Праздники</a>
              <a href="#prayers" className="text-sm font-medium hover:text-accent transition-colors">Молитвы</a>
              <a href="#fasts" className="text-sm font-medium hover:text-accent transition-colors">Посты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Православный календарь
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Главные праздники, молитвы, традиции и история православной веры
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Calendar" size={16} className="mr-2" />
                Календарь праздников
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Book" size={16} className="mr-2" />
                Тексты молитв
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Heart" size={16} className="mr-2" />
                Традиции
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="holidays" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Sparkles" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold text-primary">Православные праздники</h2>
            </div>
            
            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="calendar">Календарь</TabsTrigger>
                <TabsTrigger value="list">Список праздников</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calendar" className="animate-scale-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите дату</CardTitle>
                    <CardDescription>Узнайте о праздниках и памятных датах</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="list" className="animate-scale-in">
                <div className="grid gap-6">
                  {holidays.map((holiday) => (
                    <Card key={holiday.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{holiday.name}</CardTitle>
                            <CardDescription className="text-base">{holiday.date}</CardDescription>
                          </div>
                          <Badge variant="secondary">{holiday.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="description">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Icon name="Info" size={18} />
                                Описание
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground leading-relaxed">{holiday.description}</p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="traditions">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Icon name="Users" size={18} />
                                Традиции
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground leading-relaxed">{holiday.traditions}</p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="history">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <Icon name="BookOpen" size={18} />
                                История
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground leading-relaxed">{holiday.history}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="prayers" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="BookText" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold text-primary">Тексты молитв</h2>
            </div>
            
            <div className="grid gap-6">
              {prayers.map((prayer) => (
                <Card key={prayer.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl">{prayer.name}</CardTitle>
                      <Badge>{prayer.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="churchSlavonic" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="churchSlavonic">Церковнославянский</TabsTrigger>
                        <TabsTrigger value="russian">Русский</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="churchSlavonic">
                        <div className="bg-card p-6 rounded-lg border">
                          <p className="text-lg leading-loose text-foreground/90">{prayer.churchSlavonic}</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="russian">
                        <div className="bg-card p-6 rounded-lg border">
                          <p className="text-lg leading-loose text-foreground/90">{prayer.russian}</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fasts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Moon" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold text-primary">Информация о постах</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {fasts.map((fast) => (
                <Card key={fast.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl">{fast.name}</CardTitle>
                      <Badge variant="outline">{fast.type}</Badge>
                    </div>
                    <CardDescription className="text-base font-medium">{fast.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="FileText" size={16} />
                        Описание
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{fast.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="ListChecks" size={16} />
                        Правила
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{fast.rules}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Cross" size={24} className="text-accent" />
                  Православные Праздники
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Духовный ресурс о православных праздниках, традициях и молитвах
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Разделы</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#holidays" className="hover:text-accent transition-colors">Праздники</a></li>
                  <li><a href="#prayers" className="hover:text-accent transition-colors">Молитвы</a></li>
                  <li><a href="#fasts" className="hover:text-accent transition-colors">Посты</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    info@pravoslavie.ru
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (495) 123-45-67
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              © 2024 Православные Праздники. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
