---
id: install
title: How to Install the Mod
---

# Noita Entangled Worlds  
### Play Noita together — true co-op multiplayer

**Noita Entangled Worlds** is an online true co-op multiplayer mod for *Noita*. It lets players explore, fight, and experiment together in a synchronized world.

:::note Donations
Only **one** of the two developers can currently accept donations due to regional limitations; the other cannot receive donations because of their place of residence.
:::

---

## Quick Links

- 🎥 **Showcase Video**: [Nichelessone’s demo](https://www.youtube.com/watch?v=mMP-93-RTs0)  
- 💬 **Community Discord**: [Join the server](https://discord.gg/uAK7utvVWN)

---

## What’s Synchronized

The following gameplay elements are synchronized between players:

- Player characters (positions, health, perks, inventories)
- Wand usage
- Item usage
- Items in the world (e.g., one player throws a wand/potion/spell/item and another picks it up)
- Enemies and their attacks
- Pixel/terrain changes in the grid world
- Fungal shifts
- Polymorphing

---

## Installation

### Windows & Linux *(by @stefnotch)*

1. Download the latest **`noita-proxy-win.zip`** (Windows) or **`noita-proxy-linux.zip`** (Linux) from the mod’s [releases page](https://github.com/IntQuant/noita_entangled_worlds/releases).
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-1.png)
2. Unpack and launch the proxy. 
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-02.png)
3. Select the desired language.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-05.png)
4. The proxy will prompt you to select the game path. Choose default or your own custom one.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-06.png)
5. The proxy will prompt you to select the mod installation path. Choose default or your own custom one.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-07.png)
6. Start **Noita** and select the **Mods** option in the main menu.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-03.png)
7. In **Mods**:
   - Enable **unsafe mods** (1).
   - Enable **Quant’s Entangled Worlds** (2).
   ![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-04.png)
:::caution Enabling Unsafe Mods
Co-op requires enabling **unsafe mods**. Only enable mods you trust.
:::
---
### macOS *(by @Ownezx and @Roenalt)*

1. Install the **GOG** version of *Noita* using **PortingKit**, following the instructions on the [Noita PortingKit page].  
   - **Engine**: `WS12WineKegworks10.0-battle.net`  
   - **Operating System**: `Windows 11`

2. Verify the game launches, then locate the `noita.exe`. The default path is usually:
```title=""
/Users/{User}/Applications/Noita.app/Contents/SharedSupport/prefix/drive_c/GOG Games/Noita
```  
 
:::tip Finder Shortcut
Add a shortcut to this path in Finder for easier access later.
:::

3. Download the latest `noita-proxy-macos.zip` from the [releases page](https://github.com/IntQuant/noita_entangled_worlds/releases).

4. Unpack and launch the proxy, then provide the path to `noita.exe` when prompted.

5. Close the proxy, then relaunch it via Terminal using:
```title=""
~/Applications/noita-proxy-macos/noita_proxy --launch-cmd '"/Users/{User}/Applications/Noita.app/Contents/MacOS/wineskinlauncher" --run "C:\GOG Games\Noita\noita.exe"'
```
6. Start **Noita** and select the **Mods** option in the main menu.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-03.png)
7. In **Mods**:
   - Enable **unsafe mods** (1).
   - Enable **Quant’s Entangled Worlds** (2).
   ![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-04.png)
:::caution Enabling Unsafe Mods
Co-op requires enabling **unsafe mods**. Only enable mods you trust.
:::

:::caution Important for macOS
You must launch the proxy via Terminal with the command above every time you want to play multiplayer.
:::
---
## Connecting & Playing
### Connect Using Steam (Recommended)

1. In the proxy window, click **Create Lobby**.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-08.png)
2. Click **Save lobby ID** to clipboard.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-09.png)
3. Send the lobby ID to your friends.
4. Your friends now can paste the ID and click **Connect to lobby** in clipboard.
![Image](/img/How-to-Install-the-Mod/How-to-Install-the-Mod-10.png)
5. Start a new **Noita** game on each PC — you’ll automatically launch it in multiplayer.
### Advanced Connection Options with Command-Line Interface (CLI)
Connect to lobby:
```title=""
noita_proxy --lobby [steam_code/ip:port]
```
Host a lobby:
```title=""
noita_proxy --host [steam/port]
```
Host a Steam game:
```title=""
--host steam
```
Host via IP on port 5123 (or any port number):
```title=""
--host 5123
```
---
## Gameplay Notes
### Global Perks
List of Global Perks (11 total):
- No More Shuffle
- Unlimited Spells
- Trick Blood Money
- Gold is Forever
- Greed
- Trick Greed
- Peace with Gods
- Extra Item in Holy Mountain
- More Love
- More Hatred
- More Blood
### Mod Support
Community-tested mods are listed publicly. The list is editable — please contribute by adding mods you test along with results.