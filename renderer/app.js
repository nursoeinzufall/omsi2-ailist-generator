
const $ = s => document.querySelector(s);

/* ---------- Sprachen (weitere einfach als neuen Block ergänzen) ---------- */
const L = {
 de:{_n:'Deutsch',title:'OMSI 2 Listen-Generator',lang:'Sprache',mode_cars:'KI-Autos',mode_park:'Parklisten',mode_hum:'KI-Menschen',
  sub_cars:'Hake KI-Fahrzeuge an, ordne sie Gruppen zu und exportiere eine fertige ailists.cfg (UTF-16, wie OMSI sie erwartet).',
  sub_park:'Hake geparkte Fahrzeuge (.sco) an. Die Anzahl bestimmt, wie oft die Zeile in der Liste steht (mehrfache Einträge wie in deiner Vorlage).',
  sub_hum:'Hake KI-Menschen (.hum) an und exportiere die Liste als Textdatei. Die Anzahl bestimmt, wie oft die Zeile vorkommt.',
  chkBtn:'Liste prüfen',chkOk:'Keine Probleme gefunden.',chkSum:'{e} Fehler, {w} Warnungen, {i} Hinweise',chkNoScan:'Der Ordner wurde noch nicht gescannt, fehlende Dateien können nicht erkannt werden.',real:'Menge realistisch verteilen',mixCity:'Stadtverkehr',mixRural:'Landstraße',mixInd:'Gewerbegebiet',realConfirm:'Die Häufigkeiten aller angehakten Fahrzeuge werden nach groben Richtwerten typischer Verkehrsmischungen überschrieben (Gruppen werden vorher nach Möglichkeit automatisch zugeordnet). Fortfahren?',realDone:'{n} Häufigkeiten gesetzt. Du kannst sie danach von Hand anpassen.',iStrayEnd:'Zeile {l}: [end] ohne passenden Gruppenanfang.',iNoEnd:'Zeile {l}: Gruppe „{g}“ hat kein [end].',iNoName:'Zeile {l}: Gruppenname fehlt.',iDupGrp:'Zeile {l}: Gruppenname „{g}“ kommt mehrfach vor.',iEmptyGrp:'Zeile {l}: Gruppe „{g}“ ist leer.',iBadExt:'Zeile {l}: unbekannter Dateityp: {p}',iSlash:'Zeile {l}: „/“ statt „\\“ im Pfad (wird beim Export korrigiert).',iSpace:'Zeile {l}: Leerzeichen statt Tab vor der Häufigkeit (wird beim Export korrigiert).',iFreq:'Zeile {l}: ungültige Häufigkeit „{f}“.',iDupIn:'Zeile {l}: {p} steht doppelt in Gruppe „{g}“.',iMultiGrp:'{p} steht in mehreren Gruppen: {g}.',iPrefix:'Zeile {l}: Pfad beginnt nicht mit „{d}\\“.',iMissing:'Nicht im Ordner: {p}',iSameName:'Gleicher Dateiname in mehreren Ordnern: {p}',settings:'⚙ Einstellungen',setTitle:'Einstellungen',setFolders:'Ordner',setHint:'Beide Ordner werden gescannt und die Funde zusammengeführt. Ein Fahrzeug, das in beiden vorkommt, erscheint nur einmal.',fOmsi:'OMSI-2-Ordner',fOpen:'openOMSI-Ordner (zweites Verzeichnis)',choose:'Wählen …',clear:'Entfernen',notSet:'(nicht festgelegt)',setLook:'Darstellung',theme:'Farbschema',thSystem:'Wie Windows',thLight:'Hell',thDark:'Dunkel',zoom:'Schrift / Zoom',showChart:'Diagramm und Anteile pro Fahrzeug anzeigen',setMix:'Eigene Verkehrsmischungen',mixNew:'Neue Mischung',mixName:'Name',mixSave:'Speichern',mixDel:'Löschen',mixSum:'Summe: {s} % (wird auf 100 % umgerechnet)',mixPick:'Mischung bearbeiten …',rescan:'Neu scannen',noRoot:'Noch kein Ordner festgelegt. Öffne die Einstellungen (⚙).',fmLbl:'Häufigkeit:',fmNum:'Zahlen',fmPct:'Prozent',freqMode:'Häufigkeiten eingeben als',thSoll:'Soll %',thCustom:'Eigene Farben',colPreset:'Vorlage',prePick:'Vorlage wählen …',preDark:'Standard dunkel',preLight:'Standard hell',preYellow:'Bus-Gelb',preContrast:'Hochkontrast',preGreen:'Grün',colReset:'Zurücksetzen',colBg:'Hintergrund',colPanel:'Flächen',colInk:'Text',colMute:'Text (gedämpft)',colLine:'Linien',colAcc:'Akzent (Knöpfe, Balken)',colWarn:'Warnfarbe',colOk:'Kontrast Text/Hintergrund: {c}:1 – gut lesbar.',colLow:'Achtung: wenig Kontrast zwischen Text und Hintergrund ({c}:1). Lesbar ab etwa 4,5:1.',setData:'Daten',expSet:'Einstellungen exportieren',impSet:'Einstellungen importieren',setExported:'Einstellungen exportiert.',setImported:'Einstellungen importiert.',setBad:'Das ist keine gültige Einstellungs-Datei.',clrCache:'Zwischenspeicher leeren und neu scannen',cacheNote:'Zwischenspeicher: {c} von {n} Ordnern unverändert.',info:'ⓘ Info',infoTitle:'Über dieses Programm',infoVer:'Version {v}',infoGuideH:'Kurzanleitung',infoLogH:'Letzte Änderungen',infoBy:'Gemacht von NurSoEinZufall und Claude.',infoGuide:'Ordner festlegen: ⚙ Einstellungen → OMSI-2-Ordner (optional zusätzlich openOMSI).|Modus wählen: KI-Autos, Parklisten oder KI-Menschen.|Fahrzeuge anhaken, Gruppen (bis zu 3) und Häufigkeiten festlegen. Mit „Prozent“ legst du stattdessen Wahrscheinlichkeiten in % fest.|„Liste prüfen“ zeigt Fehler und Warnungen, „Menge realistisch verteilen“ setzt typische Verkehrsmischungen.|Speichern: „Exportieren“ oder „In geladene ailists.cfg einfügen“ (mit automatischem Backup).',infoLog:'Eigene Farben, Prozent-Modus, Häufigkeit pro Gruppe, Einstellungen sichern/laden, Scan-Zwischenspeicher, Info-Fenster und neues Icon.|Einstellungsmenü, zweites Verzeichnis (openOMSI), eigene Verkehrsmischungen, Diagramm, Hell/Dunkel und Zoom.|Listenprüfung, bis zu 3 Gruppen pro Fahrzeug, Auswahl speichern/laden.',saveSel:'Auswahl speichern',loadSel:'Auswahl laden',merge:'In geladene ailists.cfg einfügen (mit Backup)',thCnt:'Fahrzeuge',thSum:'Summe Häufigkeit',thShare:'Anteil',warnMissing:'{n} angehakte Einträge liegen nicht im Ordner.',rmMissing:'Fehlende Einträge entfernen',warnDup:'{n} doppelte Einträge in der geladenen Datei wurden zusammengeführt.',statsLine:'{n} Einträge angehakt, Gesamthäufigkeit {f}',selSaved:'{n} Einträge gespeichert.',selLoaded:'{n} Einträge geladen.',selBad:'Das ist keine gültige Auswahl-Datei.',mergeDone:'{f} geschrieben. Backup der alten Datei: {b}',allOn:'Alle anhaken',allOff:'Alle abwählen',autoGrp:'Gruppen automatisch verteilen',autoDone:'{n} Fahrzeuge verteilt. Manuell geänderte Gruppen bleiben unverändert.',allFolders:'Alle Ordner',rootFolder:'(Hauptordner)',prevNone:'Keine Vorschau gefunden',close:'Schließen',pick:'OMSI-2-Ordner wählen',load:'Bestehende Liste laden',filter:'Filtern …',likely:'nur wahrscheinliche Treffer',selVis:'Sichtbare anhaken',deselVis:'Sichtbare abwählen',newGrp:'Neue Gruppe',export:'Exportieren',
  idle:'Noch nichts geladen.',empty:'Wähle den OMSI-2-Hauptordner (oder direkt den passenden Unterordner). Der Ordner wird nur gelesen, nichts wird verändert.',
  scanning:'Scanne …',found:'{n} gefunden, {v} angezeigt, {c} angehakt.',noFolder:'Ordner „{d}“ nicht gefunden. Bitte den OMSI-2-Hauptordner wählen.',noFiles:'Keine passenden Dateien gefunden.',
  err:'Fehler: {m}',loaded:'{n} Einträge übernommen.',noEntries:'Keine passenden Einträge in dieser Datei gefunden.',exported:'{f} gespeichert.',backupNote:' Backup der alten Datei: {b}',
  thVeh:'Fahrzeug',thHum:'Mensch',thGroup:'Gruppe',thFreq:'Häufigkeit',thCount:'Anzahl',missing:'nicht im Ordner',grpPrompt:'Name der neuen Gruppe:'},
 en:{_n:'English',title:'OMSI 2 List Generator',lang:'Language',mode_cars:'AI cars',mode_park:'Parking lists',mode_hum:'AI pedestrians',
  sub_cars:'Tick AI vehicles, assign them to groups and export a ready-made ailists.cfg (UTF-16, as OMSI expects it).',
  sub_park:'Tick parked vehicles (.sco). The count sets how often the line appears in the list (repeated entries, as in your template).',
  sub_hum:'Tick AI pedestrians (.hum) and export the list as a text file. The count sets how often the line appears.',
  chkBtn:'Check list',chkOk:'No problems found.',chkSum:'{e} errors, {w} warnings, {i} notes',chkNoScan:'The folder has not been scanned yet, so missing files cannot be detected.',real:'Distribute quantities realistically',mixCity:'City traffic',mixRural:'Rural road',mixInd:'Industrial area',realConfirm:'The frequencies of all ticked vehicles will be overwritten using rough reference values for typical traffic mixes (groups are assigned automatically first where possible). Continue?',realDone:'{n} frequencies set. You can adjust them by hand afterwards.',iStrayEnd:'Line {l}: [end] without a matching group start.',iNoEnd:'Line {l}: group \"{g}\" has no [end].',iNoName:'Line {l}: group name missing.',iDupGrp:'Line {l}: group name \"{g}\" appears more than once.',iEmptyGrp:'Line {l}: group \"{g}\" is empty.',iBadExt:'Line {l}: unknown file type: {p}',iSlash:'Line {l}: \"/\" instead of \"\\\\\" in the path (corrected on export).',iSpace:'Line {l}: space instead of tab before the frequency (corrected on export).',iFreq:'Line {l}: invalid frequency \"{f}\".',iDupIn:'Line {l}: {p} appears twice in group \"{g}\".',iMultiGrp:'{p} is in several groups: {g}.',iPrefix:'Line {l}: path does not start with \"{d}\\\\\".',iMissing:'Not in folder: {p}',iSameName:'Same file name in several folders: {p}',settings:'⚙ Settings',setTitle:'Settings',setFolders:'Folders',setHint:'Both folders are scanned and the results merged. A vehicle found in both appears only once.',fOmsi:'OMSI 2 folder',fOpen:'openOMSI folder (second directory)',choose:'Choose …',clear:'Remove',notSet:'(not set)',setLook:'Appearance',theme:'Color scheme',thSystem:'Like Windows',thLight:'Light',thDark:'Dark',zoom:'Text size / zoom',showChart:'Show chart and share per vehicle',setMix:'Custom traffic mixes',mixNew:'New mix',mixName:'Name',mixSave:'Save',mixDel:'Delete',mixSum:'Total: {s} % (scaled to 100 %)',mixPick:'Edit mix …',rescan:'Rescan',noRoot:'No folder set yet. Open the settings (⚙).',fmLbl:'Frequency:',fmNum:'Numbers',fmPct:'Percent',freqMode:'Enter frequencies as',thSoll:'Target %',thCustom:'Custom colors',colPreset:'Preset',prePick:'Choose preset …',preDark:'Default dark',preLight:'Default light',preYellow:'Bus yellow',preContrast:'High contrast',preGreen:'Green',colReset:'Reset',colBg:'Background',colPanel:'Panels',colInk:'Text',colMute:'Text (muted)',colLine:'Lines',colAcc:'Accent (buttons, bars)',colWarn:'Warning color',colOk:'Text/background contrast: {c}:1 – easy to read.',colLow:'Warning: low contrast between text and background ({c}:1). Readable from about 4.5:1.',setData:'Data',expSet:'Export settings',impSet:'Import settings',setExported:'Settings exported.',setImported:'Settings imported.',setBad:'This is not a valid settings file.',clrCache:'Clear cache and rescan',cacheNote:'Cache: {c} of {n} folders unchanged.',info:'ⓘ Info',infoTitle:'About this program',infoVer:'Version {v}',infoGuideH:'Quick guide',infoLogH:'Recent changes',infoBy:'Made by NurSoEinZufall and Claude.',infoGuide:'Set folders: ⚙ Settings → OMSI 2 folder (optionally openOMSI as well).|Choose a mode: AI cars, parking lists or AI pedestrians.|Tick vehicles, set groups (up to 3) and frequencies. With “Percent” you set probabilities in % instead.|“Check list” shows errors and warnings, “Distribute quantities realistically” applies typical traffic mixes.|Save: “Export” or “Merge into loaded ailists.cfg” (with automatic backup).',infoLog:'Custom colors, percent mode, frequency per group, export/import settings, scan cache, info window and new icon.|Settings menu, second directory (openOMSI), custom traffic mixes, chart, light/dark and zoom.|List check, up to 3 groups per vehicle, save/load selection.',saveSel:'Save selection',loadSel:'Load selection',merge:'Merge into loaded ailists.cfg (with backup)',thCnt:'Vehicles',thSum:'Total frequency',thShare:'Share',warnMissing:'{n} ticked entries are not in the folder.',rmMissing:'Remove missing entries',warnDup:'{n} duplicate entries in the loaded file were merged.',statsLine:'{n} entries ticked, total frequency {f}',selSaved:'{n} entries saved.',selLoaded:'{n} entries loaded.',selBad:'This is not a valid selection file.',mergeDone:'{f} written. Backup of the old file: {b}',allOn:'Tick all',allOff:'Untick all',autoGrp:'Distribute groups automatically',autoDone:'{n} vehicles distributed. Groups you changed manually stay as they are.',allFolders:'All folders',rootFolder:'(main folder)',prevNone:'No preview found',close:'Close',pick:'Choose OMSI 2 folder',load:'Load existing list',filter:'Filter …',likely:'likely matches only',selVis:'Tick visible',deselVis:'Untick visible',newGrp:'New group',export:'Export',
  idle:'Nothing loaded yet.',empty:'Choose the OMSI 2 main folder (or the matching subfolder directly). The folder is only read, nothing is changed.',
  scanning:'Scanning …',found:'{n} found, {v} shown, {c} ticked.',noFolder:'Folder "{d}" not found. Please choose the OMSI 2 main folder.',noFiles:'No matching files found.',
  err:'Error: {m}',loaded:'{n} entries imported.',noEntries:'No matching entries found in this file.',exported:'{f} saved.',backupNote:' Backup of the old file: {b}',
  thVeh:'Vehicle',thHum:'Pedestrian',thGroup:'Group',thFreq:'Frequency',thCount:'Count',missing:'not in folder',grpPrompt:'Name of the new group:'},
 nl:{_n:'Nederlands',title:'OMSI 2 Lijstgenerator',lang:'Taal',mode_cars:'AI-auto\'s',mode_park:'Parkeerlijsten',mode_hum:'AI-voetgangers',
  sub_cars:'Vink AI-voertuigen aan, wijs ze toe aan groepen en exporteer een kant-en-klare ailists.cfg (UTF-16, zoals OMSI verwacht).',
  sub_park:'Vink geparkeerde voertuigen (.sco) aan. Het aantal bepaalt hoe vaak de regel in de lijst staat (herhaalde regels, zoals in je voorbeeld).',
  sub_hum:'Vink AI-voetgangers (.hum) aan en exporteer de lijst als tekstbestand. Het aantal bepaalt hoe vaak de regel voorkomt.',
  chkBtn:'Lijst controleren',chkOk:'Geen problemen gevonden.',chkSum:'{e} fouten, {w} waarschuwingen, {i} opmerkingen',chkNoScan:'De map is nog niet gescand, ontbrekende bestanden kunnen niet worden gevonden.',real:'Aantallen realistisch verdelen',mixCity:'Stadsverkeer',mixRural:'Buitenweg',mixInd:'Bedrijventerrein',realConfirm:'De frequenties van alle aangevinkte voertuigen worden overschreven met globale richtwaarden voor typische verkeersmixen. Doorgaan?',realDone:'{n} frequenties ingesteld. Je kunt ze daarna handmatig aanpassen.',saveSel:'Selectie opslaan',loadSel:'Selectie laden',merge:'In geladen ailists.cfg samenvoegen (met back-up)',thCnt:'Voertuigen',thSum:'Totale frequentie',thShare:'Aandeel',warnMissing:'{n} aangevinkte items staan niet in de map.',rmMissing:'Ontbrekende items verwijderen',warnDup:'{n} dubbele items in het geladen bestand zijn samengevoegd.',statsLine:'{n} items aangevinkt, totale frequentie {f}',selSaved:'{n} items opgeslagen.',selLoaded:'{n} items geladen.',selBad:'Dit is geen geldig selectiebestand.',mergeDone:'{f} geschreven. Back-up van het oude bestand: {b}',allOn:'Alles aanvinken',allOff:'Alles uitvinken',autoGrp:'Groepen automatisch verdelen',autoDone:'{n} voertuigen verdeeld. Handmatig gewijzigde groepen blijven ongewijzigd.',allFolders:'Alle mappen',rootFolder:'(hoofdmap)',prevNone:'Geen voorbeeld gevonden',close:'Sluiten',pick:'OMSI 2-map kiezen',load:'Bestaande lijst laden',filter:'Filteren …',likely:'alleen waarschijnlijke treffers',selVis:'Zichtbare aanvinken',deselVis:'Zichtbare uitvinken',newGrp:'Nieuwe groep',export:'Exporteren',
  idle:'Nog niets geladen.',empty:'Kies de hoofdmap van OMSI 2 (of direct de juiste submap). De map wordt alleen gelezen, er wordt niets gewijzigd.',
  scanning:'Scannen …',found:'{n} gevonden, {v} getoond, {c} aangevinkt.',noFolder:'Map "{d}" niet gevonden. Kies de hoofdmap van OMSI 2.',noFiles:'Geen passende bestanden gevonden.',
  err:'Fout: {m}',loaded:'{n} items overgenomen.',noEntries:'Geen passende items in dit bestand gevonden.',exported:'{f} opgeslagen.',backupNote:' Back-up van het oude bestand: {b}',
  thVeh:'Voertuig',thHum:'Voetganger',thGroup:'Groep',thFreq:'Frequentie',thCount:'Aantal',missing:'niet in map',grpPrompt:'Naam van de nieuwe groep:'},
 pl:{_n:'Polski',title:'Generator list OMSI 2',lang:'Język',mode_cars:'Samochody AI',mode_park:'Listy parkingowe',mode_hum:'Piesi AI',
  sub_cars:'Zaznacz pojazdy AI, przypisz je do grup i wyeksportuj gotowy plik ailists.cfg (UTF-16, tak jak oczekuje OMSI).',
  sub_park:'Zaznacz zaparkowane pojazdy (.sco). Liczba określa, ile razy wiersz występuje na liście (powtórzenia, jak w Twoim wzorze).',
  sub_hum:'Zaznacz pieszych AI (.hum) i wyeksportuj listę jako plik tekstowy. Liczba określa, ile razy wiersz występuje.',
  chkBtn:'Sprawdź listę',chkOk:'Nie znaleziono problemów.',chkSum:'Błędy: {e}, ostrzeżenia: {w}, uwagi: {i}',chkNoScan:'Folder nie został jeszcze przeskanowany, brakujące pliki nie mogą zostać wykryte.',real:'Rozłóż liczbę realistycznie',mixCity:'Ruch miejski',mixRural:'Droga pozamiejska',mixInd:'Strefa przemysłowa',realConfirm:'Częstotliwości wszystkich zaznaczonych pojazdów zostaną nadpisane orientacyjnymi wartościami typowych struktur ruchu. Kontynuować?',realDone:'Ustawiono częstotliwości: {n}. Możesz je potem poprawić ręcznie.',saveSel:'Zapisz wybór',loadSel:'Wczytaj wybór',merge:'Wstaw do wczytanego ailists.cfg (z kopią zapasową)',thCnt:'Pojazdy',thSum:'Suma częstotliwości',thShare:'Udział',warnMissing:'{n} zaznaczonych wpisów nie ma w folderze.',rmMissing:'Usuń brakujące wpisy',warnDup:'Scalono {n} zduplikowanych wpisów z wczytanego pliku.',statsLine:'Zaznaczono wpisów: {n}, łączna częstotliwość: {f}',selSaved:'Zapisano wpisów: {n}.',selLoaded:'Wczytano wpisów: {n}.',selBad:'To nie jest prawidłowy plik wyboru.',mergeDone:'Zapisano {f}. Kopia zapasowa starego pliku: {b}',allOn:'Zaznacz wszystko',allOff:'Odznacz wszystko',autoGrp:'Przydziel grupy automatycznie',autoDone:'Przydzielono pojazdów: {n}. Ręcznie zmienione grupy pozostają bez zmian.',allFolders:'Wszystkie foldery',rootFolder:'(folder główny)',prevNone:'Nie znaleziono podglądu',close:'Zamknij',pick:'Wybierz folder OMSI 2',load:'Wczytaj istniejącą listę',filter:'Filtruj …',likely:'tylko prawdopodobne trafienia',selVis:'Zaznacz widoczne',deselVis:'Odznacz widoczne',newGrp:'Nowa grupa',export:'Eksportuj',
  idle:'Nic jeszcze nie wczytano.',empty:'Wybierz główny folder OMSI 2 (lub od razu odpowiedni podfolder). Folder jest tylko odczytywany, nic nie jest zmieniane.',
  scanning:'Skanowanie …',found:'Znaleziono: {n}, widocznych: {v}, zaznaczonych: {c}.',noFolder:'Nie znaleziono folderu „{d}”. Wybierz główny folder OMSI 2.',noFiles:'Nie znaleziono pasujących plików.',
  err:'Błąd: {m}',loaded:'Przejęto wpisów: {n}.',noEntries:'Nie znaleziono pasujących wpisów w tym pliku.',exported:'Zapisano {f}.',backupNote:' Kopia zapasowa starego pliku: {b}',
  thVeh:'Pojazd',thHum:'Pieszy',thGroup:'Grupa',thFreq:'Częstotliwość',thCount:'Liczba',missing:'brak w folderze',grpPrompt:'Nazwa nowej grupy:'}
};
let lang='de';
try{ const s=localStorage.getItem('omsiLang'); const n=(navigator.language||'de').slice(0,2); lang=L[s]?s:(L[n]?n:'de'); }catch(e){}
const t=(k,v={})=>(L[lang][k]??L.en[k]??k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');

/* ---------- Zustand ---------- */
const groups=['NormalCars','SpecialCars','Trucks','Commercials','Ambulance'];
const AI_RE=/(^|[\\_\-.])(ai|ki)([_\-.\\\d]|$)|aicars|kipkw/i;
const MODES={
  cars:{dir:'vehicles',ext:/\.(bus|ovh)$/i,likely:p=>/\.ovh$/i.test(p)||AI_RE.test(p.replace(/^vehicles\\/i,'')),file:'ailists.cfg'},
  park:{dir:'vehicles',ext:/\.sco$/i,likely:p=>/park/i.test(p),file:'parklist_p.txt'},
  hum:{dir:'humans',ext:/\.hum$/i,likely:()=>true,file:'humans.txt'}
};
const S={cars:{items:[]},park:{items:[]},hum:{items:[]}};
let mode='cars'; const RAW={};
const roots={omsi:'',open:''}, rootList=()=>[roots.omsi,roots.open].filter(Boolean);
let cfg={theme:'system',zoom:100,showChart:true,mixes:{},colors:{},freqMode:'num',gp:{}};
const IMGS=new Map(), IMG=/\.(jpe?g|png|bmp|gif|webp)$/i;
let folderSel='', selPath='', prevUrl=null, origCfg=null;
const folderOf=p=>p.split('\\').slice(1,-1).join('\\')||'.';
const cur=()=>S[mode].items;
const slots=i=>{ const o=[],seen=new Set(); [[i.group,i.freq],[i.group2,i.freq2??i.freq],[i.group3,i.freq3??i.freq]].forEach(([g,f])=>{ if(g&&!seen.has(g)){ seen.add(g); o.push({g,f}); } }); return o; };
const gl=i=>slots(i).map(s=>s.g);
const FK=['freq','freq2','freq3'];
const OPT0='<option value="">—</option>';
function status(x,err){const s=$('#status');s.textContent=x;s.className=err?'err':'';}

/* ---------- Scannen ---------- */
function setScan(m,found){
  const st=S[m], seen=new Set(), old=new Map(st.items.map(i=>[i.path.toLowerCase(),i]));
  found=found.filter(p=>{const k=p.toLowerCase();if(seen.has(k))return false;seen.add(k);return true}).sort((a,b)=>a.localeCompare(b,'de'));
  st.items=found.map(p=>{const o=old.get(p.toLowerCase());return o?{...o,path:p,missing:false}:{path:p,on:false,group:groups[0],freq:1,missing:false}});
  old.forEach((o,k)=>{if((o.missing||o.on)&&!seen.has(k)) st.items.push({...o,missing:true})});
  st.scanned=true;
}
async function scan(m){
  const c=MODES[m], rl=rootList();
  if(!rl.length) return status(t('noRoot'),true);
  status(t('scanning'));
  try{
    const r=await omsi.scan(rl,c.dir,c.ext.source);
    if(r.error){ $('#prog').hidden=true; return status(t('noFolder',{d:c.dir}),true); }
    r.imgs.forEach(([k,a])=>{ const l=IMGS.get(k)||[]; a.forEach(x=>{ if(!l.some(y=>y.name===x.name)) l.push(x); }); IMGS.set(k,l); });
    setScan(m,r.files); $('#prog').hidden=true; $('#scanInfo').textContent=r.stats?t('cacheNote',{c:r.stats.cached,n:r.stats.total}):''; render();
  }catch(e){ status(t('err',{m:e.message}),true); }
}
function resetScans(){ for(const m in S) S[m].scanned=false; IMGS.clear(); }
function showRoot(){ $('#rootInfo').textContent=[roots.omsi&&'OMSI 2',roots.open&&'openOMSI'].filter(Boolean).join(' + '); $('#rootInfo').title=rootList().join('\n'); }

/* ---------- Bestehende Listen laden ---------- */
function decode(buf){
  const u=new Uint8Array(buf);
  if(u[0]===0xFF&&u[1]===0xFE) return new TextDecoder('utf-16le').decode(u);
  if(u[0]===0xFE&&u[1]===0xFF) return new TextDecoder('utf-16be').decode(u);
  return new TextDecoder('windows-1252').decode(u);
}
function parseCfg(text){
  const Ls=text.replace(/^\uFEFF/,'').split(/\r?\n/), res=[];
  for(let i=0;i<Ls.length;i++){
    if(Ls[i].trim().toLowerCase()!=='[aigroup_2]') continue;
    const g=(Ls[i+1]||'').trim(); i+=2;
    for(;i<Ls.length&&Ls[i].trim().toLowerCase()!=='[end]';i++){
      const m=/^(vehicles[\\/].+?\.(?:bus|ovh))(?:[\t ]+(\d+))?$/i.exec(Ls[i].trim());
      if(m) res.push({path:m[1].replace(/\//g,'\\'),group:g,freq:parseInt(m[2])||1});
    }
  }
  return res;
}
function parseList(text,ext){
  const map=new Map();
  text.replace(/^\uFEFF/,'').split(/\r?\n/).map(l=>l.trim()).filter(l=>l&&ext.test(l)).map(l=>l.replace(/\//g,'\\')).forEach(p=>{
    const k=p.toLowerCase(); if(map.has(k)) map.get(k).freq++; else map.set(k,{path:p,group:groups[0],freq:1});
  });
  return [...map.values()];
}
function applyEntries(entries){
  const items=cur(), seen=new Set();
  entries.forEach(e=>{
    if(mode==='cars'&&!groups.includes(e.group)) groups.push(e.group);
    const it=items.find(x=>x.path.toLowerCase()===e.path.toLowerCase());
    if(it&&mode==='cars'&&seen.has(it)){
      if(!gl(it).includes(e.group)){ if(!it.group2){ it.group2=e.group; it.freq2=e.freq; } else if(!it.group3){ it.group3=e.group; it.freq3=e.freq; } }
    }
    else if(it){ it.on=true; it.group=e.group; it.group2=''; it.group3=''; it.freq=e.freq; it.freq2=it.freq3=undefined; it.manual=true; seen.add(it); }
    else{ const n={path:e.path,on:true,group:e.group,freq:e.freq,missing:!!S[mode].scanned,manual:true}; items.push(n); seen.add(n); }
  });
  render(); status(t('loaded',{n:entries.length}));
}

/* ---------- Anzeige ---------- */
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function visible(){
  const q=$('#q').value.trim().toLowerCase(), only=$('#onlyAi').checked&&mode!=='hum', lk=MODES[mode].likely;
  return cur().map((it,i)=>({it,i})).filter(({it})=>(it.on||it.missing||!only||lk(it.path))&&(!q||it.path.toLowerCase().includes(q))&&(!folderSel||folderOf(it.path)===folderSel));
}
function fillFolders(){
  const only=$('#onlyAi').checked&&mode!=='hum', lk=MODES[mode].likely, m=new Map();
  cur().forEach(it=>{ if(it.on||it.missing||!only||lk(it.path)){ const f=folderOf(it.path); m.set(f,(m.get(f)||0)+1); } });
  if(folderSel&&!m.has(folderSel)) folderSel='';
  $('#folder').innerHTML=`<option value="">${t('allFolders')} (${[...m.values()].reduce((a,b)=>a+b,0)})</option>`+
    [...m].sort((a,b)=>a[0].localeCompare(b[0],'de')).map(([f,n])=>`<option value="${esc(f)}"${f===folderSel?' selected':''}>${esc(f==='.'?t('rootFolder'):f)} (${n})</option>`).join('');
}
function render(){ fillFolders(); if(mode==='cars'&&cfg.freqMode==='pct') applyPercent();
  const items=cur(), n=items.filter(i=>i.on).length;
  syncBtns();
  if(!items.length){ $('#out').className='empty'; $('#out').textContent=t('empty'); status(t(S[mode].scanned?'noFiles':'idle')); return; }
  const v=visible(), cars=mode==='cars', ro=(cars&&cfg.freqMode==='pct')?' readonly':'';
  status(t('found',{n:items.length,v:v.length,c:n}));
  const opts=sel=>groups.map(g=>`<option${g===sel?' selected':''}>${esc(g)}</option>`).join('');
  $('#out').className='';
  $('#out').innerHTML=`<table><thead><tr><th></th><th>${t(mode==='hum'?'thHum':'thVeh')}</th>${cars?`<th>${t('thGroup')}</th>`:''}<th>${t(cars?'thFreq':'thCount')}</th><th class="sh">${t('thShare')}</th></tr></thead><tbody>`+
    v.map(({it,i})=>`<tr class="${(it.on?'on':'')+(it.path===selPath?' sel':'')}" data-i="${i}"><td><input type="checkbox" class="c"${it.on?' checked':''}></td>
      <td class="path">${esc(it.path)}${it.missing?`<span class="tag w">${t('missing')}</span>`:''}${cars&&/\.ovh$/i.test(it.path)?'<span class="tag">ovh</span>':''}</td>
      ${cars?`<td class="grp"><select class="g">${opts(it.group)}</select><select class="g2">${OPT0}${opts(it.group2)}</select><select class="g3">${OPT0}${opts(it.group3)}</select></td>`:''}
      <td class="num"><input type="number" class="f" min="1" max="999" value="${it.freq}"${ro}>${cars?`<input type="number" class="f2" min="1" max="999" value="${it.freq2??it.freq}" title="${esc(it.group2||'')}"${it.group2?'':' hidden'}${ro}><input type="number" class="f3" min="1" max="999" value="${it.freq3??it.freq}" title="${esc(it.group3||'')}"${it.group3?'':' hidden'}${ro}>`:''}</td><td class="sh"><span class="shv"></span>${cars?'<input type="number" class="vp" min="0" max="100" step="0.5">':''}</td></tr>`).join('')+'</tbody></table>'; updShares();
}
/* ---------- Prozent-Modus ---------- */
function groupPcts(l){
  const fixed=l.filter(i=>i.w!==undefined), free=l.filter(i=>i.w===undefined), sum=fixed.reduce((a,i)=>a+i.w,0), res=new Map();
  const sc=sum>100?100/sum:1, rest=Math.max(0,100-sum*sc);
  fixed.forEach(i=>res.set(i,i.w*sc)); free.forEach(i=>res.set(i,rest/free.length));
  return res;
}
function vehPcts(on){ const res=new Map(); [...new Set(on.map(i=>i.group))].forEach(g=>groupPcts(on.filter(i=>i.group===g)).forEach((v,k)=>res.set(k,v))); return res; }
function gpVals(gs){
  const gp=cfg.gp||{}, given=gs.filter(g=>gp[g]!==undefined), free=gs.filter(g=>gp[g]===undefined), sum=given.reduce((a,g)=>a+gp[g],0), rest=Math.max(0,100-sum)/Math.max(1,free.length), o={};
  gs.forEach(g=>o[g]=gp[g]!==undefined?gp[g]:Math.round(rest*10)/10); return o;
}
function applyPercent(){
  const on=cur().filter(i=>i.on); if(!on.length) return;
  const entries=[]; on.forEach(i=>slots(i).forEach((s,k)=>entries.push({it:i,k,group:s.g,path:i.path})));
  const gs=[...new Set(entries.map(e=>e.group))], mix=gpVals(gs), pc=new Map();
  gs.forEach(g=>pc.set(g,groupPcts(on.filter(i=>gl(i).includes(g)))));
  allocate(entries,mix,e=>pc.get(e.group).get(e.it)).forEach((v,e)=>{ e.it[FK[e.k]]=v; });
}
function syncRows(){
  const items=cur(), cars=mode==='cars', pct=cars&&cfg.freqMode==='pct', ae=document.activeElement, vm=pct?vehPcts(items.filter(i=>i.on)):null;
  document.querySelectorAll('#out tbody tr').forEach(tr=>{
    const it=items[+tr.dataset.i]; if(!it) return;
    FK.forEach((k,n)=>{ const el=tr.querySelector('.f'+(n?n+1:'')); if(el&&el!==ae){ el.value=it[k]??it.freq; el.readOnly=pct; } });
    const vp=tr.querySelector('.vp'); if(vp&&vp!==ae) vp.value=(pct&&it.on&&vm.has(it))?vm.get(it).toFixed(1):'';
  });
}
function afterEdit(){ if(mode==='cars'&&cfg.freqMode==='pct') applyPercent(); syncRows(); syncBtns(); }
$('#out').addEventListener('input',e=>{
  const tr=e.target.closest('tr'); if(!tr) return; const it=cur()[+tr.dataset.i], c=e.target.classList, num=()=>Math.max(1,parseInt(e.target.value)||1);
  if(c.contains('c')){ it.on=e.target.checked; tr.classList.toggle('on',it.on); status(t('found',{n:cur().length,v:visible().length,c:cur().filter(i=>i.on).length})); }
  else if(c.contains('g')){ it.group=e.target.value; it.manual=true; }
  else if(c.contains('g2')){ it.group2=e.target.value; it.manual=true; tr.querySelector('.f2').hidden=!it.group2; }
  else if(c.contains('g3')){ it.group3=e.target.value; it.manual=true; tr.querySelector('.f3').hidden=!it.group3; }
  else if(c.contains('f')) it.freq=num();
  else if(c.contains('f2')) it.freq2=num();
  else if(c.contains('f3')) it.freq3=num();
  else return;
  afterEdit();
});
$('#out').addEventListener('change',e=>{
  if(!e.target.classList.contains('vp')) return;
  const it=cur()[+e.target.closest('tr').dataset.i], v=parseFloat(e.target.value);
  it.w=(isNaN(v)||v<0)?undefined:Math.min(100,v); afterEdit();
});
$('#stats').addEventListener('change',e=>{
  if(!e.target.classList.contains('gp')) return;
  const v=parseFloat(e.target.value); if(isNaN(v)||v<0) return;
  setCfg('gp',{...(cfg.gp||{}),[e.target.dataset.g]:Math.min(100,v)}); afterEdit();
});

/* ---------- Export ---------- */
function build(){
  const out=[];
  if(mode==='cars'){
    groups.forEach(g=>{
      const list=cur().filter(i=>i.on&&gl(i).includes(g)); if(!list.length) return;
      out.push('[aigroup_2]',g,''); list.forEach(i=>out.push(i.path+'\t'+slots(i).find(s=>s.g===g).f)); out.push('[end]','');
    });
  }else cur().filter(i=>i.on).forEach(i=>{ for(let k=0;k<i.freq;k++) out.push(i.path); });
  return out.join('\r\n');
}
const utf16=x=>{const b=new Uint8Array(2+x.length*2);b[0]=0xFF;b[1]=0xFE;for(let i=0;i<x.length;i++){const c=x.charCodeAt(i);b[2+i*2]=c&255;b[3+i*2]=c>>8}return b};
const ansi=x=>Uint8Array.from(x,ch=>ch.charCodeAt(0)<256?ch.charCodeAt(0):63);
async function download(){
  const f=MODES[mode].file, ext=f.split('.').pop(), data=mode==='cars'?utf16(build()):ansi(build());
  const r=await omsi.saveFile({defaultName:f,data,filters:[{name:f,extensions:[ext]}]});
  if(r) status(t('exported',{f:r.path})+(r.backup?t('backupNote',{b:r.backup}):''));
}

/* ---------- Oberfläche ---------- */
function applyLang(){
  document.documentElement.lang=lang; document.title=t('title');
  document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
  fillMixSel(); $('#q').placeholder=t('filter'); $('#prevX').title=t('close'); $('#sub').textContent=t('sub_'+mode);
  $('#lang').innerHTML=Object.keys(L).map(k=>`<option value="${k}"${k===lang?' selected':''}>${L[k]._n}</option>`).join('');
  render();
}
function setMode(m){
  mode=m; folderSel=''; $('#prev').hidden=true; $('#check').hidden=true;
  document.querySelectorAll('.modes button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===m));
  $('#likelyBox').hidden=m==='hum'; $('#newGrp').hidden=m!=='cars'; $('#autoGrp').hidden=m!=='cars'; $('#merge').hidden=m!=='cars'; $('#real').hidden=$('#mixSel').hidden=m!=='cars'; syncFm(); $('#sub').textContent=t('sub_'+m);
  render();
  if(rootList().length&&!S[m].scanned) scan(m);
}
document.querySelectorAll('.modes button').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('#lang').onchange=e=>{ lang=e.target.value; try{localStorage.setItem('omsiLang',lang)}catch(x){} applyLang(); };
$('#pick').onclick=()=>{ if(!rootList().length) return openSettings(); resetScans(); scan(mode); };
const u8buf=u=>u.buffer.slice(u.byteOffset,u.byteOffset+u.byteLength);
$('#load').onclick=async()=>{
  const f=await omsi.openFile({title:t('load'),filters:[{name:'ailists / Liste',extensions:['cfg','txt']},{name:'*',extensions:['*']}]}); if(!f) return;
  const buf=u8buf(f.bytes), txt=decode(buf), r=mode==='cars'?parseCfg(txt):parseList(txt,MODES[mode].ext);
  if(!r.length) return status(t('noEntries'),true);
  RAW[mode]=txt;
  if(mode==='cars'){ const u=new Uint8Array(buf); origCfg={name:f.name,path:f.path,buf,text:txt,u16:u[0]===0xFF&&u[1]===0xFE}; S.cars.dups=0; const gm=new Map(); r.forEach(x=>{ const k=x.path.toLowerCase(); if(!gm.has(k)) gm.set(k,[]); gm.get(k).push(x.group); }); gm.forEach(a=>{ const d=new Set(a).size; S.cars.dups+=a.length-d+Math.max(0,d-3); }); }
  applyEntries(r);
};
$('#q').oninput=render; $('#onlyAi').onchange=render;
$('#allVis').onclick=()=>{ visible().forEach(({it})=>it.on=true); render(); };
$('#noneVis').onclick=()=>{ visible().forEach(({it})=>it.on=false); render(); };
$('#newGrp').onclick=()=>{ $('#grpLbl').textContent=t('grpPrompt'); $('#grpIn').value=''; $('#grpDlg').showModal(); $('#grpIn').focus(); };
$('#grpDlg').addEventListener('close',()=>{ const n=$('#grpIn').value.trim(); if($('#grpDlg').returnValue==='ok'&&n&&!groups.includes(n)){ groups.push(n); render(); } });
$('#export').onclick=download;
/* ---------- Vorschau ---------- */
async function showPreview(it){
  selPath=it.path; $('#prev').hidden=false; $('#prevCap').textContent=it.path;
  const img=$('#prevImg'), msg=$('#prevMsg');
  const dir=it.path.slice(0,it.path.lastIndexOf('\\')+1).toLowerCase();
  const c=[...(IMGS.get(dir)||[]),...(IMGS.get(dir+'picture\\')||[])];
  if(!c.length){ img.hidden=true; msg.textContent=t('prevNone'); return; }
  const base=it.path.split('\\').pop().replace(/\.[^.]+$/,'').toLowerCase();
  const pick=c.find(x=>x.name.toLowerCase().replace(/\.[^.]+$/,'')===base)||c.find(x=>/pic|prev|thumb|bild/i.test(x.name))||c[0];
  img.src=pick.url; img.hidden=false; msg.textContent=pick.name;
}
$('#out').addEventListener('click',e=>{
  if(e.target.closest('input,select')) return;
  const tr=e.target.closest('tbody tr'); if(!tr) return;
  document.querySelectorAll('#out tr.sel').forEach(r=>r.classList.remove('sel')); tr.classList.add('sel');
  showPreview(cur()[+tr.dataset.i]);
});
$('#prevX').onclick=()=>{ $('#prev').hidden=true; };

/* ---------- Gruppen automatisch verteilen ---------- */
const RULES=[
 ['Ambulance',/active/i],
 ['Trucks',/(^|[\\_.\-])(lkw|truck|atego|actros|axor|arocs|tgx|tgs|tga|tgl|tgm|daf|scania|iveco|sattel|kipper|trailer|fh|fm)([\\_.\-\d]|$)/i],
 ['SpecialCars',/(^|[\\_.\-])(taxi|pol|polizei|police|ambu|rtw|ktw|nef|feuerwehr|fw|fire|bundeswehr)([\\_.\-\d]|$)/i],
 ['Commercials',/(^|[\\_.\-])(t[1-6]|transporter|sprinter|vito|crafter|ducato|boxer|transit|caddy|kasten|pritsche|van|lieferwagen|kombi)([\\_.\-\d]|$)/i]
];
function autoGroups(){
  let n=0;
  cur().forEach(it=>{
    if(!it.on||it.manual) return;
    const p=it.path.replace(/^vehicles\\/i,''), r=RULES.find(([g,re])=>re.test(p)), g=r?r[0]:'NormalCars';
    if(!groups.includes(g)) groups.push(g);
    it.group=g; n++;
  });
  render(); status(t('autoDone',{n}));
}
$('#autoGrp').onclick=autoGroups;
$('#allOn').onclick=()=>{ cur().forEach(it=>it.on=true); render(); };
$('#allOff').onclick=()=>{ cur().forEach(it=>it.on=false); render(); };
$('#folder').onchange=e=>{ folderSel=e.target.value; render(); };
/* ---------- Auswertung ---------- */
function syncBtns(){
  const n=cur().filter(i=>i.on).length;
  $('#export').disabled=n===0; $('#merge').disabled=n===0||!origCfg||mode!=='cars';
  renderStats();
}
const PAL=['#0b5d8f','#f2b705','#2e9e6b','#c2410c','#7c5cc4','#0891b2','#be185d','#64748b','#a16207','#15803d'];
function donut(parts){
  const R=60,r=36,cx=70,cy=70, tot=parts.reduce((s,p)=>s+p.v,0)||1; let a0=-Math.PI/2, o='';
  const x=(q,a)=>(cx+q*Math.cos(a)).toFixed(2), y=(q,a)=>(cy+q*Math.sin(a)).toFixed(2);
  parts.forEach(p=>{
    const a1=a0+2*Math.PI*p.v/tot;
    if(p.v/tot>=0.9999) o+=`<circle cx="${cx}" cy="${cy}" r="${(R+r)/2}" fill="none" stroke="${p.c}" stroke-width="${R-r}"/>`;
    else{ const l=(a1-a0)>Math.PI?1:0; o+=`<path d="M${x(R,a0)} ${y(R,a0)} A${R} ${R} 0 ${l} 1 ${x(R,a1)} ${y(R,a1)} L${x(r,a1)} ${y(r,a1)} A${r} ${r} 0 ${l} 0 ${x(r,a0)} ${y(r,a0)}Z" fill="${p.c}"/>`; }
    a0=a1;
  });
  return `<svg viewBox="0 0 140 140" width="140" height="140" role="img">${o}</svg>`;
}
function updShares(){
  const items=cur(), cars=mode==='cars', n=i=>cars?slots(i).reduce((a,s)=>a+s.f,0):i.freq, tot=items.filter(i=>i.on).reduce((a,i)=>a+n(i),0);
  document.querySelectorAll('#out tbody tr').forEach(tr=>{
    const c=tr.querySelector('.shv'), it=items[+tr.dataset.i]; if(!c||!it) return;
    c.textContent=it.on&&tot?(Math.round(n(it)*1000/tot)/10).toFixed(1)+' %':'';
  });
}
function renderStats(){
  const box=$('#stats'), on=cur().filter(i=>i.on);
  updShares();
  if(!on.length){ box.hidden=true; return; }
  const cars=mode==='cars', n=i=>cars?slots(i).reduce((a,s)=>a+s.f,0):i.freq;
  const tot=on.reduce((a,i)=>a+n(i),0), miss=on.filter(i=>i.missing).length;
  let h=`<b>${t('statsLine',{n:on.length,f:tot})}</b>`;
  if(cars){
    const gs=groups.filter(g=>on.some(i=>gl(i).includes(g))), soll=gpVals(gs), parts=[];
    const rows=groups.map((g,k)=>{
      const l=on.filter(i=>gl(i).includes(g)); if(!l.length) return '';
      const f=l.reduce((a,i)=>a+slots(i).find(s=>s.g===g).f,0), p=Math.round(f*1000/tot)/10, c=PAL[k%PAL.length]; parts.push({v:f,c});
      return `<tr><td><span class="dot" style="background:${c}"></span>${esc(g)}</td><td>${l.length}</td><td>${f}</td><td class="gpc"><input type="number" class="gp" data-g="${esc(g)}" min="0" max="100" step="0.5" value="${soll[g]}"></td><td class="pct"><span style="width:${p}%"></span></td><td>${p}%</td></tr>`;
    }).join('');
    h+=`<div class="sw"><table><thead><tr><th>${t('thGroup')}</th><th>${t('thCnt')}</th><th>${t('thSum')}</th><th class="gpc">${t('thSoll')}</th><th colspan="2">${t('thShare')}</th></tr></thead><tbody>${rows}</tbody></table><div id="chart">${donut(parts)}</div></div>`;
    if(cfg.freqMode==='pct') h+=`<p class="gpc" style="color:var(--mute);margin:6px 0 0">${t('mixSum',{s:Object.values(soll).reduce((a,b)=>a+b,0).toFixed(1)})}</p>`;
    if(S.cars.dups) h+=`<p class="w">${t('warnDup',{n:S.cars.dups})}</p>`;
  }
  if(miss) h+=`<p class="w">${t('warnMissing',{n:miss})} <button id="rmMiss">${t('rmMissing')}</button></p>`;
  box.innerHTML=h; box.hidden=false;
}
$('#stats').addEventListener('click',e=>{ if(e.target.id!=='rmMiss') return; S[mode].items=S[mode].items.filter(i=>!i.missing); render(); });

/* ---------- In bestehende ailists.cfg einfügen ---------- */
function mergeCfg(text,fresh){
  const Ls=text.replace(/^\uFEFF/,'').split(/\r?\n/), out=[]; let ins=-1;
  for(let i=0;i<Ls.length;i++){
    if(Ls[i].trim().toLowerCase()==='[aigroup_2]'){
      let j=i+1; while(j<Ls.length&&Ls[j].trim().toLowerCase()!=='[end]') j++;
      const body=Ls.slice(i+2,j).map(x=>x.trim()).filter(Boolean);
      if(body.some(x=>/^vehicles[\\/].+\.(bus|ovh)([\t ]|$)/i.test(x))&&!body.some(x=>/^trains\\/i.test(x))){
        if(ins<0) ins=out.length;
        i=j; if(Ls[i+1]!==undefined&&Ls[i+1].trim()==='') i++;
        continue;
      }
      out.push(...Ls.slice(i,j+1)); i=j; continue;
    }
    out.push(Ls[i]);
  }
  out.splice(ins<0?0:ins,0,...fresh.split(/\r?\n/));
  return out.join('\r\n');
}
async function doMerge(){
  if(!origCfg||!origCfg.path) return;
  const merged=mergeCfg(origCfg.text,build()), data=origCfg.u16?utf16(merged):ansi(merged);
  const r=await omsi.mergeFile(origCfg.path,data);
  origCfg.text=merged; origCfg.buf=u8buf(data);
  status(t('mergeDone',{f:r.path,b:r.backup||'–'}));
}

/* ---------- Auswahl speichern / laden ---------- */
async function saveSel(){
  const pick=m=>S[m].items.filter(i=>i.on).map(i=>m==='cars'?{p:i.path,g:i.group,g2:i.group2||'',g3:i.group3||'',f:i.freq,f2:i.freq2,f3:i.freq3,w:i.w}:{p:i.path,f:i.freq});
  const o={app:'omsi2-listen',v:1,groups,gp:cfg.gp||{},cars:pick('cars'),park:pick('park'),hum:pick('hum')};
  const r=await omsi.saveFile({defaultName:'omsi2_auswahl.json',data:new TextEncoder().encode(JSON.stringify(o,null,1)),filters:[{name:'JSON',extensions:['json']}]});
  if(r) status(t('selSaved',{n:o.cars.length+o.park.length+o.hum.length}));
}
function loadSelObj(o){
  if(!o||o.app!=='omsi2-listen') throw 0;
  (o.groups||[]).forEach(g=>{ if(typeof g==='string'&&g&&!groups.includes(g)) groups.push(g); });
  if(o.gp&&typeof o.gp==='object') setCfg('gp',{...cfg.gp,...o.gp});
  let n=0;
  for(const m of ['cars','park','hum']) (o[m]||[]).forEach(e=>{
    if(!e||typeof e.p!=='string') return;
    const items=S[m].items, it=items.find(x=>x.path.toLowerCase()===e.p.toLowerCase()), g=e.g||groups[0], fr=Math.max(1,parseInt(e.f)||1);
    if(it){ it.on=true; it.group=g; it.group2=e.g2||''; it.group3=e.g3||''; it.freq=fr; it.freq2=e.f2; it.freq3=e.f3; it.w=e.w; it.manual=true; }
    else items.push({path:e.p,on:true,group:g,group2:e.g2||'',group3:e.g3||'',freq:fr,freq2:e.f2,freq3:e.f3,w:e.w,missing:!!S[m].scanned,manual:true});
    n++;
  });
  render(); status(t('selLoaded',{n}));
}
$('#merge').onclick=doMerge; $('#saveSel').onclick=saveSel;
$('#loadSel').onclick=async()=>{
  const f=await omsi.openFile({title:t('loadSel'),filters:[{name:'JSON',extensions:['json']}]}); if(!f) return;
  try{ loadSelObj(JSON.parse(new TextDecoder().decode(f.bytes))); }catch(x){ status(t('selBad'),true); }
};

/* ---------- Liste prüfen ---------- */
function checkCfg(text,add){
  const Ls=text.replace(/^\uFEFF/,'').split(/\r?\n/), names=new Set(), multi=new Map();
  for(let i=0;i<Ls.length;i++){
    const h=Ls[i].trim().toLowerCase();
    if(h==='[aigroup_depot_typgroup_2]'){ while(i<Ls.length&&Ls[i].trim().toLowerCase()!=='[end]') i++; continue; }
    if(h==='[end]'){ add('err','iStrayEnd',{l:i+1}); continue; }
    if(h!=='[aigroup_2]') continue;
    const g=(Ls[i+1]||'').trim(), l0=i+1;
    if(!g||/[\\/]/.test(g)) add('err','iNoName',{l:l0+1});
    if(names.has(g.toLowerCase())) add('warn','iDupGrp',{l:l0,g}); names.add(g.toLowerCase());
    let j=i+2, n=0; const seen=new Set();
    for(;j<Ls.length;j++){
      const r=Ls[j].trim(), rl=r.toLowerCase();
      if(rl==='[end]') break;
      if(rl.startsWith('[aigroup')){ add('err','iNoEnd',{l:l0,g}); j--; break; }
      if(!r||r[0]==='#') continue;
      n++;
      const parts=r.split('\t'); let p=parts[0].trim(), fr=parts[1];
      if(parts.length<2){ const m=/^(.+?\.(?:bus|ovh|zug))\s+(\S+)$/i.exec(r); if(m){ add('warn','iSpace',{l:j+1}); p=m[1]; fr=m[2]; } }
      if(p.includes('/')) add('warn','iSlash',{l:j+1});
      if(!/\.(bus|ovh|zug)$/i.test(p)) add('err','iBadExt',{l:j+1,p});
      if(fr!==undefined&&!/^\d+$/.test(fr.trim())) add('err','iFreq',{l:j+1,f:fr});
      const key=p.replace(/\//g,'\\').toLowerCase();
      if(seen.has(key)) add('warn','iDupIn',{l:j+1,p,g}); seen.add(key);
      (multi.get(key)||multi.set(key,{p,g:new Set()}).get(key)).g.add(g);
    }
    if(j>=Ls.length) add('err','iNoEnd',{l:l0,g}); else if(!n) add('warn','iEmptyGrp',{l:l0,g});
    i=j;
  }
  multi.forEach(v=>{ if(v.g.size>1) add('info','iMultiGrp',{p:v.p,g:[...v.g].join(', ')}); });
}
function checkList(text,add){
  const c=MODES[mode], re=new RegExp('^'+c.dir+'[\\\\/]','i');
  text.replace(/^\uFEFF/,'').split(/\r?\n/).forEach((raw,i)=>{
    const l=raw.trim(); if(!l) return;
    if(!c.ext.test(l)) return add('err','iBadExt',{l:i+1,p:l});
    if(l.includes('/')) add('warn','iSlash',{l:i+1});
    if(!re.test(l)) add('warn','iPrefix',{l:i+1,d:c.dir});
  });
}
function runCheck(){
  const is=[], add=(sev,k,v)=>is.push([sev,t(k,v)]), txt=RAW[mode];
  if(txt) (mode==='cars'?checkCfg:checkList)(txt,add);
  const on=cur().filter(i=>i.on), miss=on.filter(i=>i.missing);
  if(!S[mode].scanned) add('info','chkNoScan');
  miss.slice(0,40).forEach(i=>add('err','iMissing',{p:i.path}));
  if(miss.length>40) is.push(['err','… +'+(miss.length-40)]);
  const nm=new Map(); on.forEach(i=>{ const b=i.path.split('\\').pop().toLowerCase(); if(!nm.has(b)) nm.set(b,[]); nm.get(b).push(i.path); });
  nm.forEach(a=>{ if(a.length>1) add('info','iSameName',{p:a.join(' | ')}); });
  const c=k=>is.filter(x=>x[0]===k).length, sym={err:'✖',warn:'▲',info:'●'}, box=$('#check');
  box.innerHTML=is.length?`<b>${t('chkSum',{e:c('err'),w:c('warn'),i:c('info')})}</b><ul>`+is.slice(0,200).map(([s,x])=>`<li class="${s}">${sym[s]} ${esc(x)}</li>`).join('')+'</ul>'+
    (miss.length?`<p><button id="rmMiss2">${t('rmMissing')}</button></p>`:''):`<b>${t('chkOk')}</b>`;
  box.hidden=false;
}
$('#chk').onclick=runCheck;
$('#check').addEventListener('click',e=>{ if(e.target.id!=='rmMiss2') return; S[mode].items=S[mode].items.filter(i=>!i.missing); render(); runCheck(); });

/* ---------- Menge realistisch verteilen (grobe Richtwerte, Anteile in %) ---------- */
const MIX={
  city:{NormalCars:88,Commercials:6,Trucks:2.5,SpecialCars:3,Ambulance:.5},
  rural:{NormalCars:84,Commercials:6,Trucks:8,SpecialCars:1.5,Ambulance:.5},
  ind:{NormalCars:70,Commercials:14,Trucks:14,SpecialCars:1.5,Ambulance:.5}
};
function allocate(list,mix,wtf){
  const gs=[...new Set(list.map(i=>i.group))], sh={}; gs.forEach(g=>sh[g]=mix[g]??2);
  const shT=gs.reduce((a,g)=>a+sh[g],0)||1, wt=wtf||(i=>i.group==='SpecialCars'&&/taxi/i.test(i.path)?6:1);
  const calc=(T,clamp)=>{
    const r=new Map(); let ok=true;
    gs.forEach(g=>{ const l=list.filter(i=>i.group===g), W=l.reduce((a,i)=>a+wt(i),0)||1;
      l.forEach(i=>{ const z=sh[g]===0||!wt(i); let v=z?1:Math.round(T*sh[g]/shT*wt(i)/W); if(clamp) v=Math.min(999,Math.max(1,v)); else if(!z&&(v<1||v>999)) ok=false; r.set(i,v); }); });
    return ok?r:null;
  };
  let r=null; for(let T=100;T<=3000&&!r;T+=50) r=calc(T,false);
  return r||calc(300,true);
}
function realistic(){
  const on=cur().filter(i=>i.on); if(!on.length) return;
  if(!confirm(t('realConfirm'))) return;
  if(new Set(on.map(i=>i.group)).size===1) autoGroups();
  const entries=[]; on.forEach(i=>slots(i).forEach((s,k)=>entries.push({it:i,k,group:s.g,path:i.path})));
  const mx=getMix($('#mixSel').value);
  if(cfg.freqMode==='pct'){
    const gs=[...new Set(entries.map(e=>e.group))], tt=gs.reduce((a,g)=>a+(mx[g]??2),0)||1, gp={};
    gs.forEach(g=>gp[g]=Math.round((mx[g]??2)*1000/tt)/10); setCfg('gp',{...cfg.gp,...gp});
    render(); status(t('realDone',{n:on.length})); return;
  }
  allocate(entries,mx).forEach((v,e)=>{ e.it[FK[e.k]]=v; });
  render(); status(t('realDone',{n:on.length}));
}
$('#real').onclick=realistic;
/* ---------- Einstellungen ---------- */
const setCfg=(k,v)=>{ cfg[k]=v; omsi.setSetting(k,v); };
const PRESETS={
  dark:{bg:'#14181e',panel:'#1c222b',ink:'#e6e9ee',mute:'#8d97a6',line:'#2f3744',acc:'#4aa3da',warn:'#f0a35e'},
  light:{bg:'#f3f4f6',panel:'#ffffff',ink:'#1c2430',mute:'#667085',line:'#d9dde3',acc:'#0b5d8f',warn:'#b54708'},
  yellow:{bg:'#16181c',panel:'#20242a',ink:'#f2f2f2',mute:'#a3a8b0',line:'#363c45',acc:'#f2b705',warn:'#ff7a59'},
  contrast:{bg:'#000000',panel:'#0a0a0a',ink:'#ffffff',mute:'#d0d0d0',line:'#ffffff',acc:'#ffe600',warn:'#ff8a3d'},
  green:{bg:'#0f1a14',panel:'#16251c',ink:'#e8f3ec',mute:'#8fb09b',line:'#25402f',acc:'#3ecf7a',warn:'#f0a35e'}
};
const PREK={dark:'preDark',light:'preLight',yellow:'preYellow',contrast:'preContrast',green:'preGreen'};
const COLS=['bg','panel','ink','mute','line','acc','warn'], COLK={bg:'colBg',panel:'colPanel',ink:'colInk',mute:'colMute',line:'colLine',acc:'colAcc',warn:'colWarn'};
const lum=h=>{ const [r,g,b]=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(c=>c<=.03928?c/12.92:((c+.055)/1.055)**2.4); return .2126*r+.7152*g+.0722*b; };
const contrast=(a,b)=>{ const [x,y]=[lum(a),lum(b)].sort((p,q)=>q-p); return (x+.05)/(y+.05); };
const inkOn=h=>lum(h)>.45?'#0b1117':'#ffffff';
function applyLook(){
  const r=document.documentElement, s=r.style;
  [...COLS.map(k=>'--'+k),'--acc-ink','color-scheme'].forEach(k=>s.removeProperty(k));
  if(cfg.theme==='system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme',cfg.theme);
  if(cfg.theme==='custom'){
    const c={...PRESETS.dark,...cfg.colors}; COLS.forEach(k=>s.setProperty('--'+k,c[k]));
    s.setProperty('--acc-ink',inkOn(c.acc)); s.setProperty('color-scheme',lum(c.bg)<.4?'dark':'light');
  }
  document.body.classList.toggle('nochart',!cfg.showChart);
  document.body.classList.toggle('pctmode',cfg.freqMode==='pct'&&mode==='cars');
  omsi.setZoom(cfg.zoom/100);
}
const mixKeys=()=>Object.keys(cfg.mixes||{});
const getMix=k=>k.startsWith('u:')?(cfg.mixes[k.slice(2)]||{}):(MIX[k]||MIX.city);
function fillMixSel(){
  const sel=$('#mixSel'), old=sel.value;
  sel.innerHTML=[['city','mixCity'],['rural','mixRural'],['ind','mixInd']].map(([v,k])=>`<option value="${v}">${t(k)}</option>`).join('')+
    mixKeys().map(n=>`<option value="u:${esc(n)}">★ ${esc(n)}</option>`).join('');
  if([...sel.options].some(o=>o.value===old)) sel.value=old;
}
function fillMixEd(){ $('#mixEdSel').innerHTML=`<option value="">${t('mixPick')}</option>`+mixKeys().map(n=>`<option value="${esc(n)}">${esc(n)}</option>`).join(''); }
function mixSum(){
  let s=0; document.querySelectorAll('#mixSl input').forEach(i=>{ i.nextElementSibling.textContent=(+i.value).toFixed(1)+' %'; s+=+i.value; });
  $('#mixSumO').textContent=t('mixSum',{s:s.toFixed(1)});
}
function openMixEd(name){
  const m=name?(cfg.mixes[name]||{}):{};
  $('#mixEd').hidden=false; $('#mixName').value=name; $('#mixName').dataset.orig=name; $('#mixDel').hidden=!name;
  $('#mixSl').innerHTML=groups.map(g=>`<div class="frow"><span>${esc(g)}</span><input type="range" min="0" max="100" step="0.5" value="${m[g]??(MIX.city[g]??2)}" data-g="${esc(g)}"><output></output></div>`).join('');
  mixSum();
}
function showPaths(){ $('#pOmsi').textContent=roots.omsi||t('notSet'); $('#pOpen').textContent=roots.open||t('notSet'); }
function fillSettingsUI(){
  showPaths(); $('#themeSel').value=cfg.theme; $('#zoomR').value=cfg.zoom; $('#zoomO').textContent=cfg.zoom+' %';
  $('#chartChk').checked=!!cfg.showChart; $('#fmSet').value=cfg.freqMode; $('#colBox').hidden=cfg.theme!=='custom';
  fillColUI(); fillMixEd(); $('#mixEd').hidden=true;
}
function openSettings(){ fillSettingsUI(); $('#setDlg').showModal(); }
async function setRoot(key,cfgKey,clear){
  const p=clear?'':await omsi.pickFolder(roots[key]); if(p===null||p===undefined) return;
  roots[key]=p; omsi.setSetting(cfgKey,p); showPaths(); showRoot(); resetScans();
  if(rootList().length) scan(mode);
}
$('#settingsBtn').onclick=openSettings; $('#setX').onclick=()=>$('#setDlg').close();
$('#bOmsi').onclick=()=>setRoot('omsi','omsiPath'); $('#cOmsi').onclick=()=>setRoot('omsi','omsiPath',true);
$('#bOpen').onclick=()=>setRoot('open','openOmsiPath'); $('#cOpen').onclick=()=>setRoot('open','openOmsiPath',true);
$('#themeSel').onchange=e=>{ setCfg('theme',e.target.value); $('#colBox').hidden=e.target.value!=='custom'; applyLook(); };
$('#zoomR').oninput=e=>{ cfg.zoom=+e.target.value; $('#zoomO').textContent=cfg.zoom+' %'; omsi.setZoom(cfg.zoom/100); };
$('#zoomR').onchange=()=>setCfg('zoom',cfg.zoom);
$('#chartChk').onchange=e=>{ setCfg('showChart',e.target.checked); applyLook(); };
$('#mixEdSel').onchange=e=>{ if(e.target.value) openMixEd(e.target.value); else $('#mixEd').hidden=true; };
$('#mixNew').onclick=()=>{ openMixEd(''); $('#mixEdSel').value=''; $('#mixName').focus(); };
$('#mixSl').addEventListener('input',mixSum);
$('#mixSave').onclick=()=>{
  const n=$('#mixName').value.trim(), m={}; let s=0; if(!n) return;
  document.querySelectorAll('#mixSl input').forEach(i=>{ m[i.dataset.g]=+i.value; s+=+i.value; }); if(s<=0) return;
  const mixes={...cfg.mixes}, o=$('#mixName').dataset.orig; if(o&&o!==n) delete mixes[o];
  mixes[n]=m; setCfg('mixes',mixes); fillMixSel(); fillMixEd(); $('#mixEdSel').value=n; $('#mixName').dataset.orig=n; $('#mixDel').hidden=false;
};
$('#mixDel').onclick=()=>{
  const o=$('#mixName').dataset.orig; if(!o) return;
  const mixes={...cfg.mixes}; delete mixes[o]; setCfg('mixes',mixes); fillMixSel(); fillMixEd(); $('#mixEd').hidden=true;
};
/* ---------- Farben, Prozent-Schalter, Sichern, Info ---------- */
function colInfo(){ const c={...PRESETS.dark,...cfg.colors}, r=contrast(c.ink,c.bg); $('#colWarn').textContent=t(r<4.5?'colLow':'colOk',{c:r.toFixed(1)}); }
function fillColUI(){
  const c={...PRESETS.dark,...cfg.colors};
  $('#colGrid').innerHTML=COLS.map(k=>`<div class="frow"><span>${t(COLK[k])}</span><input type="color" data-k="${k}" value="${c[k]}"></div>`).join('');
  $('#colPreset').innerHTML=`<option value="">${t('prePick')}</option>`+Object.keys(PRESETS).map(k=>`<option value="${k}">${t(PREK[k])}</option>`).join('');
  colInfo();
}
$('#colGrid').addEventListener('input',e=>{ const k=e.target.dataset.k; if(!k) return; cfg.colors={...cfg.colors,[k]:e.target.value}; applyLook(); colInfo(); });
$('#colGrid').addEventListener('change',()=>setCfg('colors',cfg.colors));
$('#colPreset').onchange=e=>{ const p=PRESETS[e.target.value]; if(!p) return; setCfg('colors',{...p}); applyLook(); fillColUI(); };
$('#colReset').onclick=()=>{ setCfg('colors',{...PRESETS.dark}); applyLook(); fillColUI(); };
function syncFm(){
  $('#fmSel').value=cfg.freqMode; $('#fmSet').value=cfg.freqMode; $('#fmBox').hidden=mode!=='cars';
  document.body.classList.toggle('pctmode',cfg.freqMode==='pct'&&mode==='cars');
}
function setFm(v){ setCfg('freqMode',v==='pct'?'pct':'num'); syncFm(); render(); }
$('#fmSel').onchange=e=>setFm(e.target.value); $('#fmSet').onchange=e=>setFm(e.target.value);
async function expSettings(){
  const o={app:'omsi2-einstellungen',v:1,lang,omsiPath:roots.omsi,openOmsiPath:roots.open,cfg};
  const r=await omsi.saveFile({defaultName:'omsi2_einstellungen.json',data:new TextEncoder().encode(JSON.stringify(o,null,1)),filters:[{name:'JSON',extensions:['json']}]});
  if(r) status(t('setExported'));
}
async function impSettings(){
  const f=await omsi.openFile({title:t('impSet'),filters:[{name:'JSON',extensions:['json']}]}); if(!f) return;
  try{
    const o=JSON.parse(new TextDecoder().decode(f.bytes)); if(!o||o.app!=='omsi2-einstellungen') throw 0;
    const c=o.cfg||{}, ok=(k,fn)=>{ if(c[k]!==undefined&&fn(c[k])) setCfg(k,c[k]); };
    ok('theme',v=>['system','light','dark','custom'].includes(v)); ok('zoom',v=>typeof v==='number'&&v>=50&&v<=200);
    ok('showChart',v=>typeof v==='boolean'); ok('freqMode',v=>v==='num'||v==='pct');
    ok('mixes',v=>v&&typeof v==='object'); ok('gp',v=>v&&typeof v==='object');
    ok('colors',v=>v&&typeof v==='object'&&Object.values(v).every(x=>/^#[0-9a-f]{6}$/i.test(x)));
    if(typeof o.omsiPath==='string'){ roots.omsi=o.omsiPath; omsi.setSetting('omsiPath',o.omsiPath); }
    if(typeof o.openOmsiPath==='string'){ roots.open=o.openOmsiPath; omsi.setSetting('openOmsiPath',o.openOmsiPath); }
    if(L[o.lang]){ lang=o.lang; try{ localStorage.setItem('omsiLang',lang); }catch(e){} }
    applyLook(); showRoot(); fillMixSel(); applyLang(); fillSettingsUI(); syncFm(); resetScans(); if(rootList().length) scan(mode);
    status(t('setImported'));
  }catch(e){ status(t('setBad'),true); }
}
$('#expSet').onclick=expSettings; $('#impSet').onclick=impSettings;
$('#clrCache').onclick=async()=>{ await omsi.clearCache(); resetScans(); if(rootList().length) scan(mode); };
omsi.onProgress(d=>{ const p=$('#prog'); p.hidden=false; p.max=d.total; p.value=d.done; status(t('scanning')+' '+d.done+'/'+d.total); });
async function openInfo(){
  let v='?'; try{ v=await omsi.version(); }catch(e){}
  $('#infoVer').textContent=t('infoVer',{v});
  $('#infoGuide').innerHTML=t('infoGuide').split('|').map(x=>`<li>${esc(x)}</li>`).join('');
  $('#infoLog').innerHTML=t('infoLog').split('|').map(x=>`<li>${esc(x)}</li>`).join('');
  $('#infoDlg').showModal();
}
$('#infoBtn').onclick=openInfo; $('#infoX').onclick=()=>$('#infoDlg').close();
applyLang(); setMode('cars');
(async()=>{
  try{
    const st=await omsi.getSettings();
    roots.omsi=st.omsiPath||''; roots.open=st.openOmsiPath||'';
    for(const k of ['theme','zoom','showChart','mixes','colors','freqMode','gp']) if(st[k]!==undefined) cfg[k]=st[k];
    applyLook(); fillMixSel(); showRoot(); syncFm();
    if(rootList().length) await scan(mode); else openSettings();
  }catch(e){}
})();
