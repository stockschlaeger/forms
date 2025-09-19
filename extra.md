# 📝 Testbericht: Wiederherstellungstest OracleSQL-Datenbank

## Ziel des Tests
Validierung des Wiederherstellungsprozesses der OracleSQL-Datenbank durch den Service Provider,  
um die Funktionalität und Datenkonsistenz nach einem Restore zu überprüfen.

---

## Testaufbau

- **Testsystem**: Getrennte Testumgebung (nicht produktiv)
- **Datenbank**: OracleSQL
- **Skript**: Automatisiertes k6-Skript zur Datenerzeugung
- **Ausführung**: 
  - Ausgeführt von einem Remote-Entwickler-PC
  - Initiiert von mir über das Ticketsystem
- **Testzeitraum**: 
  - Start: **14:45 Uhr**
  - Dauer: **3 Stunden**
  - Frequenz: alle **5 Minuten** ein neuer Datensatz
- **Datenformat**: Personen mit Schema `Name1`, `Name2`, `Name3`, …

---

## Restore-Vorgang

- Wiederherstellung auf den Zustand von **16:00 Uhr**
- Restore durchgeführt durch externen **Service Provider**
- Vorgang bewusst innerhalb des laufenden Datenerzeugungsfensters platziert

---

## Validierung

- Prüfung erfolgte **manuell** anhand der bekannten Testdatensätze (Namensschema)
- Ergebnisse:
  - Letzter wiederhergestellter Datensatz: **15:58 Uhr**
  - Erwarteter nächster Datensatz (16:03 Uhr) ist **nicht vorhanden** → **korrektes Verhalten**
  - Alle wiederhergestellten Datensätze waren **vollständig und konsistent**
  - Keine Anomalien oder Datenkorruption festgestellt

---

## Erkenntnisse / Lessons Learned

- Vor **jeglichen Updates oder Änderungen** ist es **zwingend notwendig, die Datenbank vorher vom System zu trennen (Disconnect/Offline)**,  
  um **Inkonsistenzen beim Restore** zu vermeiden.
- **Edge Case** wurde **nicht getestet**:  
  - Datensätze, die **zwischen zwei Sicherungspunkten erzeugt werden und deren zugehörige Folgeobjekte (z. B. Nachrichten, Dokumente) zeitversetzt eintreffen**,  
    können nach dem Restore **nicht eindeutig als fehlend erkannt werden**.
- Test wurde als einmaliger Funktionstest durchgeführt  
  - **Keine Wiederholung geplant**

---

## Zusammenfassung

- ✅ Wiederherstellung funktionierte wie erwartet  
- ⚠️ Edge Cases mit verzögert eintreffenden Datensätzen müssen separat betrachtet werden  
- 📌 Vor Änderungen an der Datenbank ist ein Trennen der Verbindung zwingend erforderlich
