# ⚙️ Konfiguracja BIOS

## Opis
Instrukcja podstawowej konfiguracji BIOS/UEFI komputera oraz najważniejszych ustawień potrzebnych podczas instalacji i diagnostyki sprzętu.

## Czym jest BIOS / UEFI?

BIOS i UEFI to oprogramowanie płyty głównej odpowiedzialne za:

- Uruchamianie komputera.
- Wykrywanie podzespołów.
- Konfigurację sprzętu.
- Wybór urządzenia startowego.
- Zarządzanie podstawowymi ustawieniami systemu.

## Jak wejść do BIOS?

Podczas uruchamiania komputera naciskaj odpowiedni klawisz:

- **DEL** - często na komputerach stacjonarnych.
- **F2** - popularne w laptopach.
- **F10** - niektóre urządzenia HP.
- **F12** - menu bootowania.

Klawisz zależy od producenta płyty głównej lub laptopa.

## Podstawowe informacje w BIOS

W BIOS można sprawdzić:

- Model procesora.
- Ilość pamięci RAM.
- Temperatury podzespołów.
- Wersję BIOS.
- Podłączone dyski.

## Ustawienie kolejności bootowania

Bootowanie określa, z którego urządzenia komputer uruchamia system.

Aby zmienić:

1. Wejdź do zakładki **Boot**.
2. Wybierz kolejność urządzeń.
3. Ustaw pierwszy dysk lub pendrive.
4. Zapisz ustawienia.

Przykład:
- Pendrive pierwszy - instalacja Windows.
- SSD pierwszy - normalne uruchamianie systemu.

## Włączenie TPM 2.0

TPM jest wymagany między innymi przez Windows 11.

Aby włączyć:

1. Wejdź do ustawień bezpieczeństwa.
2. Znajdź TPM / Security Device.
3. Włącz funkcję.
4. Zapisz zmiany.

## Włączenie Secure Boot

Secure Boot zwiększa bezpieczeństwo uruchamiania systemu.

Kroki:

1. Wejdź do zakładki bezpieczeństwa.
2. Włącz Secure Boot.
3. Zapisz konfigurację.

## Tryb UEFI i Legacy

### UEFI
Zalety:
- Obsługa nowych systemów.
- Szybszy start.
- Obsługa dużych dysków.

### Legacy
Starszy tryb zgodności.

Do nowych instalacji Windows zalecany jest tryb UEFI.

## Ustawienia pamięci RAM

BIOS pozwala:

- Sprawdzić wykrycie RAM.
- Włączyć profile XMP/EXPO.
- Zmienić taktowanie pamięci.

Uwaga:
Nieprawidłowe ustawienia mogą powodować niestabilność.

## Aktualizacja BIOS

Aktualizacja BIOS może:

- Poprawić kompatybilność sprzętu.
- Naprawić błędy.
- Dodać obsługę nowych procesorów.

Przed aktualizacją:

- Sprawdź dokładny model płyty.
- Pobierz właściwy plik.
- Nie wyłączaj komputera podczas aktualizacji.

## Reset BIOS

Jeśli komputer ma problemy:

Można wykonać reset:

- Opcją **Load Default Settings** w BIOS.
- Odłączeniem baterii CMOS.
- Użyciem zworki resetującej.

## Najczęstsze problemy

### Komputer nie widzi dysku
Sprawdź:
- Kabel SATA.
- Tryb kontrolera dysku.
- Ustawienia UEFI.

### Komputer nie uruchamia systemu
Sprawdź:
- Kolejność bootowania.
- Stan dysku.
- Ustawienia BIOS.

### Po zmianach komputer nie działa
Przywróć:
- Domyślne ustawienia BIOS.

## Bezpieczeństwo

- Nie zmieniaj przypadkowych ustawień.
- Nie przerywaj aktualizacji BIOS.
- Zapisuj zmiany tylko po sprawdzeniu.

## Podsumowanie

Poprawna konfiguracja BIOS pozwala wykorzystać pełne możliwości komputera, przygotować instalację systemu oraz rozwiązywać problemy sprzętowe.
