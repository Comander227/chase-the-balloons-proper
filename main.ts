namespace SpriteKind {
    export const Collectible = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(true, effects.hearts)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectible, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(myBalloons, assets.tile`Spawn`)
    info.startCountdown(10)
})
let myBalloons: Sprite = null
scene.setBackgroundColor(10)
tiles.setCurrentTilemap(tilemap`Arena Demo`)
let mySprite = sprites.create(assets.image`Ezra`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(false)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
myBalloons = sprites.create(assets.image`Balloons`, SpriteKind.Collectible)
tiles.placeOnRandomTile(myBalloons, assets.tile`Spawn`)
info.startCountdown(10)
