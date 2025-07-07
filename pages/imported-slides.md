---
title: Multi-Cloud-Management in Unternehmen
theme: seriph
class: text-center
highlighter: shiki
download: false
---

# Multi-Cloud-Management  
### Ein 3-Minuten-Überblick

![bg opacity=40](https://cdn.pixabay.com/photo/2020/02/15/14/33/network-4851119_1280.jpg)

::notes::
Begrüßung (10 s)  
„Willkommen! In drei Minuten sehen wir, warum Unternehmen mehrere Clouds parallel einsetzen, welche Stolpersteine es gibt – und wie man sie umgeht.“
::end-notes::

---

## Was heißt **Multi-Cloud**?

- Gleichzeitige Nutzung von **AWS**, **Azure**, **GCP**  
- Ziel: **Vendor-Lock-in vermeiden**, Resilienz & beste Services kombinieren  
- Datensouveränität & Compliance je Region erfüllen  
- „Pick the best of each“ statt One-Size-Fits-All

::notes::
Definition (20 s)  
Multi-Cloud = strategische Entscheidung, nicht Trend. Mehr Freiheit, aber mehr Komplexität.
::end-notes::

---

## 🔥 Kern-Challenges

| Thema | Warum kritisch? |
|-------|-----------------|
| **Vendor Lock-in** | Proprietäre Dienste erschweren Wechsel |
| **Compliance & Security** | Unterschiedliche Regeln & Regionen |
| **Kostenkontrolle** | Verschiedene Preismodelle, versteckte Leichen |

::notes::
Probleme (30 s)  
Lock-in → proprietäre DB; Compliance → DSGVO; Kosten → Zombie-Instanzen.
::end-notes::

---

## 🤝 Integration & Zusammenarbeit

<img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonaws.svg" height="50" />
<img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoftazure.svg" height="50" />
<img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg" height="50" />

- **Kubernetes** als einheitliche Orchestrierung  
- **API-Gateways** koppeln Workflows cloud-übergreifend  
- Zentrales **Monitoring & IAM** für Holistic View

::notes::
Lösungen (35 s)  
Standardisierung (K8s), Automatisierung (API-Trigger), zentrales Monitoring (Datadog/Grafana Cloud).
::end-notes::

---

## ⚙️ Beispiel – Terraform Multi-Cloud

```hcl {lineNumbers=table}
provider "aws" {
  region = "eu-central-1"
}
provider "azurerm" {
  features {}
}

resource "aws_s3_bucket" "static" {
  bucket = "mc-demo-eu"
}

resource "azurerm_resource_group" "static" {
  name     = "mc-rg"
  location = "westeurope"
}
```

::notes::
Demo (30 s)  
Ein Skript verwaltet AWS + Azure parallel – reproduzierbar, versioniert.
::end-notes::

---

## 🚀 Fazit

- Multi-Cloud ≠ Selbstzweck → **klarer Business-Fit nötig**  
- Richtige Tools + Prozesse **bändigen Komplexität**  
- Balance zwischen Flexibilität, Compliance & Kosten

**Fragen?**

::notes::
Schluss (15 s)  
Kurz rekapitulieren und zu Fragen einladen. Danke!
::end-notes::