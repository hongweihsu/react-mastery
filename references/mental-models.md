# Mental-model cards

## Render pipeline

State/Props → component execution → element tree → reconciliation → commit → possible DOM mutation → browser layout/paint.

## State

State 屬於 tree position；每次 render 是 snapshot；setter 排入 update queue。

## Effects

Commit → cleanup previous synchronization → setup next synchronization。Dependencies 是讀取的 reactive values，不是偏好清單。

## Identity

Position + type + key 決定 preservation。Key 是 identity，不只是 performance。

## Performance

Observe → Measure → Hypothesize → Change → Measure again。Re-render 本身不等於 bottleneck。
