require("./lib/integrityGuard")['verifyIntegrity'](__dirname);
var __createBinding = this && this['__createBinding'] || (Object["create"] ? function(_0x28c019, _0x6612f7, _0x53c6d0, _0x5f1d47) {
        const _0x5f23ab = null;
        if (_0x5f1d47 === undefined) _0x5f1d47 = _0x53c6d0;
        var _0xa3c66a = Object['getOwnPropertyDescriptor'](_0x6612f7, _0x53c6d0);
        (!_0xa3c66a || ("get" in _0xa3c66a ? !_0x6612f7["__esModule"] : _0xa3c66a["writable"] || _0xa3c66a['configurable'])) && (_0xa3c66a = {
            'enumerable': !![],
            'get': function() {
                return _0x6612f7[_0x53c6d0];
            }
        }), Object["defineProperty"](_0x28c019, _0x5f1d47, _0xa3c66a);
    } : function(_0x1e0f02, _0x411161, _0x53a034, _0x14166a) {
        if (_0x14166a === undefined) _0x14166a = _0x53a034;
        _0x1e0f02[_0x14166a] = _0x411161[_0x53a034];
    }),
    __setModuleDefault = this && this["__setModuleDefault"] || (Object['create'] ? function(_0x211242, _0x2c740) {
        Object['defineProperty'](_0x211242, 'default', {
            'enumerable': !![],
            'value': _0x2c740
        });
    } : function(_0x20cf28, _0x192a0c) {
        _0x20cf28['default'] = _0x192a0c;
    }),
    __importStar = this && this["__importStar"] || function(_0x15c32a) {
        if (_0x15c32a && _0x15c32a['__esModule']) return _0x15c32a;
        var _0x4bb21a = {};
        if (_0x15c32a != null) {
            for (var _0x420fe1 in _0x15c32a)
                if (_0x420fe1 !== 'default' && Object['prototype']['hasOwnProperty']['call'](_0x15c32a, _0x420fe1)) __createBinding(_0x4bb21a, _0x15c32a, _0x420fe1);
        }
        return __setModuleDefault(_0x4bb21a, _0x15c32a), _0x4bb21a;
    },
    __importDefault = this && this["__importDefault"] || function(_0x5db3a1) {
        return _0x5db3a1 && _0x5db3a1['__esModule'] ? _0x5db3a1 : {
            'default': _0x5db3a1
        };
    };
Object['defineProperty'](exports, '__esModule', {
    'value': !![]
});
const https = require('https'),
    baileys_1 = __importStar(require("@whiskeysockets/baileys")),
    logger_1 = __importDefault(require('@whiskeysockets/baileys/lib/Utils/logger')),
    logger = logger_1['default']["child"]({});
logger["level"] = "silent";
const pino = require('pino'),
    boom_1 = require('@hapi/boom'),
    conf = require("./settings"),
    {
        loadSettingsCache,
        getCachedSettingsSync
    } = require("./lib/settingsCache"),
    {
        handleChatbotMessage
    } = require("./handlres/chatbot"),
    {
        handleEmojiRetrieve
    } = require('./lib/retrieveEmoji'),
    {
        findBadWord,
        recordGroupMessage,
        getTimedMute
    } = require("./lib/groupModeration"),
    {
        shouldRegisterAutoContact,
        registerAutoContact
    } = require('./lib/autoContacts');

function getConf(_0x218e86) {
    const _0x80a7d0 = getCachedSettingsSync();
    return _0x80a7d0 && _0x80a7d0[_0x218e86] !== undefined ? _0x80a7d0[_0x218e86] : conf[_0x218e86];
}

function normalizePrivateContactJid(_0x2fb2fd) {
    const _0x11471b = null,
        _0x23bcba = String(_0x2fb2fd || '')['split'](':')[0x0],
        _0x29e1bb = _0x23bcba['split']('@')[0x0]['replace'](/\D/g, '');
    return _0x29e1bb["length"] >= 0x7 ? _0x29e1bb + '@s.whatsapp.net' : '';
}
async function maybeRegisterAutoContact(_0x3ebf38, _0x41595e, _0x50f5b5, _0x4eef08) {
    const _0x3af9a9 = null;
    if (_0x4eef08 || _0x3ebf38?.['key']?.['fromMe'] || !_0x41595e || !_0x50f5b5) return;
    if (!_0x41595e['endsWith']('@s.whatsapp.net') && !_0x41595e['endsWith']('@lid')) return;
    const _0x31abe6 = normalizePrivateContactJid(_0x50f5b5);
    if (!_0x31abe6 || !await shouldRegisterAutoContact(_0x31abe6)) return;
    await registerAutoContact(_0x31abe6, "New Contact • 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃");
}
const {
    cacheLidPhone,
    resolveLidToJid,
    resolveLidForStatus
} = require('./lib/lidResolver'), axios = require('axios');
let fs = require('fs-extra'),
    path = require("path");
const FileType = require("file-type"),
    {
        Sticker,
        createSticker,
        StickerTypes
    } = require('wa-sticker-formatter');
try {
    const ffmpeg = require("fluent-ffmpeg"),
        ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
    ffmpeg['setFfmpegPath'](ffmpegInstaller["path"]), console["log"]('✅\x20ffmpeg\x20path\x20set\x20to\x20bundled\x20binary:', ffmpegInstaller["path"]);
} catch (a0_0x4c5711) {
    console["log"]('⚠️\x20Could\x20not\x20set\x20bundled\x20ffmpeg\x20path:', a0_0x4c5711['message']);
}
const {
    verifierEtatJid,
    recupererActionJid
} = require('./lib/antilien'), {
    atbverifierEtatJid,
    atbrecupererActionJid
} = require("./lib/antibot");
let evt = require(__dirname + "/devblaze/blazetz");
const {
    isUserBanned,
    addUserToBanList,
    removeUserFromBanList
} = require('./lib/banUser'), {
    addGroupToBanList,
    isGroupBanned,
    removeGroupFromBanList
} = require("./lib/banGroup"), {
    isGroupOnlyAdmin,
    addGroupToOnlyAdminList,
    removeGroupFromOnlyAdminList
} = require('./lib/onlyAdmin');
let {
    reagir
} = require(__dirname + '/devblaze/app');
const {
    getAllSudoNumbers
} = require('./lib/sudo');
let cachedSudoNumbers = [];
async function refreshSudoCache() {
    try {
        cachedSudoNumbers = await getAllSudoNumbers();
    } catch (_0x4771ab) {}
}
refreshSudoCache(), setInterval(refreshSudoCache, 0x7530);

function decodeSessionId(_0x208c32) {
    const _0x25cb0c = null;
    let _0x4e28a1 = String(_0x208c32 || '')["trim"]();
    if (!_0x4e28a1 || _0x4e28a1['toLowerCase']() === 'zokk') return null;
    _0x4e28a1 = _0x4e28a1['replace'](/^["']|["']$/g, '')['trim'](), _0x4e28a1 = _0x4e28a1["replace"](/^(?:MSELA CHUI XMD|𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃|𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃)~/i, ''), _0x4e28a1 = _0x4e28a1['replace'](/\s+/g, '')['replace'](/-/g, '+')["replace"](/_/g, '/');
    if (!/^[A-Za-z0-9+/]*={0,2}$/ ['test'](_0x4e28a1)) throw new Error('SESSION_ID\x20contains\x20invalid\x20characters;\x20use\x20the\x20complete\x20pairing-session\x20string');
    while (_0x4e28a1['length'] % 0x4) _0x4e28a1 += '=';
    return Buffer['from'](_0x4e28a1, 'base64')["toString"]("utf8");
}
let sessionPayload = null;
try {
    sessionPayload = decodeSessionId(conf['session']);
} catch (a0_0x389277) {
    console['log']('Session\x20Invalid\x20' + a0_0x389277['message']);
}
const prefixe = conf['PREFIXE'],
    more = String["fromCharCode"](0x200e),
    readmore = more['repeat'](0xfa1),
    express = require("express"),
    app = express(),
    PORT = process['env']["PORT"] || 0xbb8;
app["use"](express["static"](path['join'](__dirname, 'public'))), app["listen"](PORT, () => {
    console['log']('Server\x20is\x20running\x20at\x20http://localhost:' + PORT);
});
async function authentification() {
    const _0x5d08d0 = null;
    try {
        if (!sessionPayload) return;
        const _0x2793e0 = __dirname + '/public/creds.json';
        !fs["existsSync"](_0x2793e0) && await fs["writeFileSync"](_0x2793e0, sessionPayload, "utf8");
    } catch (_0xafa01d) {
        console["log"]('Session\x20Invalid\x20' + _0xafa01d["message"]);
        return;
    }
}
authentification();
const {
    makeStore
} = require(__dirname + "/lib/MakeStore"), store = makeStore();
let isReconnecting = ![];

function safeReconnect(_0x324442) {
    if (isReconnecting) {
        console['log']('Reconnect\x20already\x20in\x20progress,\x20skipping\x20duplicate\x20trigger\x20(' + _0x324442 + ')');
        return;
    }
    isReconnecting = !![], console['log']('Reconnecting...\x20(' + _0x324442 + ')'), setTimeout(() => {
        main();
    }, 0x7d0);
}
const CHANNEL_JID = '120363405040601085@newsletter',
    CHANNEL_JIDS = ['120363405040601085@newsletter', '120363421014261315@newsletter'],
    GROUP_INVITE_LINK = 'https://chat.whatsapp.com/DmSuN4ZMdnkAGdnpK0Q5Gl?s=cl&p=a&mlu=4&ilr=4',
    CHANNEL_EMOJIS = ['🔥', '❤️', '✊️'],
    STATUS_EMOJIS = ['❤️', '🩶', '🔥', '🤍', '♦️', '🎉', '💚', '💯', '✨', '☢️', '😍', '🎊'];
let hasFollowedChannel = ![],
    hasJoinedConfiguredGroup = ![];

function extractGroupInviteCode(_0x36452a) {
    const _0x51b4f7 = String(_0x36452a || '')['match'](/chat\.whatsapp\.com\/([A-Za-z0-9_-]+)/);
    return _0x51b4f7 ? _0x51b4f7[0x1] : null;
}

function shortenChannelUrl(_0x55ae26) {
    return new Promise(_0x1241aa => {
        const _0x2b25d1 = null,
            _0x114ede = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(_0x55ae26),
            _0xd92255 = https['get'](_0x114ede, {
                'timeout': 0x1f40
            }, _0x5cb760 => {
                const _0x5b0d73 = _0x2b25d1;
                let _0x3b5a16 = '';
                _0x5cb760['setEncoding']('utf8'), _0x5cb760['on']('data', _0x330c01 => {
                    _0x3b5a16 += _0x330c01;
                }), _0x5cb760['on']("end", () => {
                    const _0x1bd2ec = _0x5b0d73,
                        _0x351ba5 = _0x3b5a16['trim']();
                    _0x1241aa(_0x5cb760['statusCode'] === 0xc8 && /^https?:\/\//i ["test"](_0x351ba5) ? _0x351ba5 : _0x55ae26);
                });
            });
        _0xd92255['on']('timeout', () => _0xd92255["destroy"]()), _0xd92255['on']("error", () => _0x1241aa(_0x55ae26));
    });
}
async function joinConfiguredDestinations(_0x37ee45) {
    const _0x52cf22 = null;
    if (!hasFollowedChannel) try {
        hasFollowedChannel = !![], await Promise.allSettled(CHANNEL_JIDS.map(jid => _0x37ee45['newsletterFollow'](jid))), console['log']("✅ Auto-followed configured channels");
    } catch (_0x3e14a5) {
        console['log']("Auto-follow channel failed or already followed: " + (_0x3e14a5['message'] || _0x3e14a5));
    }
    if (String(getConf('AUTO_JOIN_GROUP') || conf.AUTO_JOIN_GROUP || 'off').toLowerCase() !== 'on') {
        console['log']('ℹ️ Auto-join group is disabled by default; set AUTO_JOIN_GROUP=on to enable it.');
        return;
    }
    if (!hasJoinedConfiguredGroup) {
        const _0x497bb1 = extractGroupInviteCode(GROUP_INVITE_LINK);
        if (!_0x497bb1) {
            console['log']('⚠️\x20Configured\x20group\x20invite\x20link\x20is\x20invalid;\x20skipping\x20auto-join.');
            return;
        }
        try {
            hasJoinedConfiguredGroup = !![];
            const _0x2fdeac = await _0x37ee45['groupAcceptInvite'](_0x497bb1);
            console['log']('✅\x20Auto-joined\x20configured\x20MSELA CHUI XMD\x20group:', _0x2fdeac || "accepted");
        } catch (_0x4a5083) {
            console['log']("Auto-join group failed or bot is already a member: " + (_0x4a5083['message'] || _0x4a5083));
        }
    }
}
let boundedAttempts = 0x0;
const MAX_BOUNDED_ATTEMPTS = 0x5;

function boundedReconnect(_0x47da43) {
    const _0x496b32 = null;
    if (isReconnecting) {
        console['log']("Reconnect already in progress, skipping duplicate trigger (" + _0x47da43 + ')');
        return;
    }
    boundedAttempts++;
    if (boundedAttempts > MAX_BOUNDED_ATTEMPTS) {
        console['log']('❌\x20Failed\x20to\x20reconnect\x20after\x20' + MAX_BOUNDED_ATTEMPTS + " attempts (" + _0x47da43 + ').\x20Please\x20generate\x20a\x20new\x20SESSION_ID\x20and\x20redeploy.');
        return;
    }
    isReconnecting = !![];
    const _0x33d387 = Math["min"](0x1388 * boundedAttempts, 0x7530);
    console['log']("Reconnecting (bounded, attempt " + boundedAttempts + '/' + MAX_BOUNDED_ATTEMPTS + ')...\x20(' + _0x47da43 + ") in " + _0x33d387 + 'ms'), setTimeout(() => {
        main();
    }, _0x33d387);
}
async function main() {
    const _0x1c997b = null;
    await loadSettingsCache()['catch'](_0x56d26a => console['log']('⚠️\x20settings\x20cache\x20load\x20failed:', _0x56d26a["message"]));
    const {
        version: _0x5623b0,
        isLatest: _0x5314c1
    } = await (0x0, baileys_1['fetchLatestBaileysVersion'])(), {
        state: _0x3c8bf8,
        saveCreds: _0x3818cf
    } = await (0x0, baileys_1["useMultiFileAuthState"])(__dirname + '/public');
    // Android is the only supported device profile.
    const _0x4b0aBrowser = ['MSELA CHUI XMD Android', 'Chrome', '1.0.0'];
    const _0x2db888 = {
        'version': _0x5623b0,
        'logger': pino({
            'level': 'silent'
        }),
        'browser': _0x4b0aBrowser,
        'printQRInTerminal': ![],
        'fireInitQueries': ![],
        'shouldSyncHistoryMessage': () => ![],
        'downloadHistory': ![],
        'syncFullHistory': ![],
        'generateHighQualityLinkPreview': ![],
        'markOnlineOnConnect': ![],
        'keepAliveIntervalMs': 0x7530,
        'auth': {
            'creds': _0x3c8bf8['creds'],
            'keys': (0x0, baileys_1['makeCacheableSignalKeyStore'])(_0x3c8bf8['keys'], logger)
        },
        'getMessage': async _0x5d484f => {
            const _0x394796 = _0x1c997b;
            if (store) {
                const _0x4413cc = store['loadMessage'](_0x5d484f['remoteJid'], _0x5d484f['id']);
                return _0x4413cc?.["message"] || undefined;
            }
            return {
                'conversation': 'An\x20Error\x20Occurred,\x20Repeat\x20Command!'
            };
        }
    }, _0x4f6f40 = (0x0, baileys_1["default"])(_0x2db888);
    _0x4f6f40['blazeStore'] = store, store['bind'](_0x4f6f40['ev']);
    _0x4f6f40['signalRepository']?.['lidMapping']?.['on'] && _0x4f6f40['signalRepository']["lidMapping"]['on']('update', _0x5016a3 => {
        const _0x37ec41 = _0x1c997b;
        for (const _0x1b30f9 of _0x5016a3) {
            if (_0x1b30f9['lid'] && _0x1b30f9['pn']) {
                const _0x44d6c3 = _0x1b30f9['lid']["split"]('@')[0x0]['split'](':')[0x0],
                    _0x1a985c = _0x1b30f9['pn']['split']('@')[0x0]['split'](':')[0x0]['replace'](/\D/g, '');
                cacheLidPhone(_0x44d6c3, _0x1a985c);
            }
        }
    });
    _0x4f6f40['ev']['on']("lid-mapping.update", _0x2af0a7 => {
        const _0x4d379c = _0x1c997b;
        for (const [_0xe55255, _0x588588] of Object["entries"](_0x2af0a7 || {})) {
            const _0x33442f = _0xe55255["split"]('@')[0x0]['split'](':')[0x0],
                _0x2a4481 = String(_0x588588)['split']('@')[0x0]["split"](':')[0x0]['replace'](/\D/g, '');
            cacheLidPhone(_0x33442f, _0x2a4481);
        }
    });
    const _0x6b8dc6 = new Map();

    function _0x5df1a2(_0x94d5e9) {
        const _0x37546f = _0x1c997b,
            _0x350fa6 = Date['now']();
        if (!_0x6b8dc6["has"](_0x94d5e9)) return _0x6b8dc6["set"](_0x94d5e9, _0x350fa6), ![];
        const _0xc6b2f2 = _0x6b8dc6["get"](_0x94d5e9);
        if (_0x350fa6 - _0xc6b2f2 < 0xbb8) return !![];
        return _0x6b8dc6['set'](_0x94d5e9, _0x350fa6), ![];
    }
    const _0x589f7e = new Map();
    async function _0x18c404(_0x566857, _0x5e4367) {
        const _0x13e597 = _0x1c997b;
        if (_0x589f7e['has'](_0x5e4367)) return _0x589f7e['get'](_0x5e4367);
        try {
            const _0x2e70a6 = await _0x566857['groupMetadata'](_0x5e4367);
            return _0x589f7e['set'](_0x5e4367, _0x2e70a6), setTimeout(() => _0x589f7e["delete"](_0x5e4367), 0xea60), _0x2e70a6;
        } catch (_0x5c493e) {
            return _0x5c493e['message']["includes"]('rate-overlimit') && await new Promise(_0x12dcf2 => setTimeout(_0x12dcf2, 0x1388)), null;
        }
    }
    process['on']("uncaughtException", _0x2950e9 => {
        console['log']('UNCAUGHT\x20EXCEPTION:', _0x2950e9);
    }), process['on']("unhandledRejection", _0x2bb988 => {
        console['log']('UNHANDLED\x20REJECTION:', _0x2bb988);
    }), _0x4f6f40['ev']['on']("messages.upsert", async _0x23d7ac => {
        const {
            messages: _0x36ff5a
        } = _0x23d7ac;
        if (!_0x36ff5a || _0x36ff5a['length'] === 0x0) return;
        for (const _0x47bae4 of _0x36ff5a) {
            if (!_0x47bae4['message']) continue;
            const _0x4e9a49 = _0x47bae4['key']['remoteJid'];
            if (_0x5df1a2(_0x4e9a49)) continue;
        }
    }), _0x4f6f40['ev']['on']("messages.upsert", async _0x2d443f => {
        try {
            for (const _0x31e802 of _0x2d443f['messages'] || []) {
                await handleEmojiRetrieve(_0x4f6f40, _0x31e802);
            }
        } catch (_0x598bf9) {
            console['error']('[emoji-retrieve-listener]', _0x598bf9);
        }
    }), _0x4f6f40['ev']['on']("messages.upsert", async _0x3e268e => {
        const _0x5d7c35 = _0x1c997b;
        try {
            const {
                messages: _0x152410
            } = _0x3e268e;
            if (!_0x152410 || _0x152410["length"] === 0x0) return;
            for (const _0x5e899c of _0x152410) {
                const _0x11f5b5 = _0x5e899c["key"]?.["remoteJid"];
                if (!_0x11f5b5 || _0x5e899c['message']?.["protocolMessage"]) continue;
                const _0x3302a1 = (0x0, baileys_1['getContentType'])(_0x5e899c['message']);
                if (_0x3302a1 === 'reactionMessage') continue;
                if (_0x11f5b5 === 'status@broadcast') {
                    if ((getConf("AUTO_REACT_STATUS") || '')["toLowerCase"]() === 'on') try {
                        if (!global['_statusSeen']) global['_statusSeen'] = new Set();
                        const _0x3fd867 = _0x5e899c["key"]?.['id'] || '';
                        if (_0x3fd867) {
                            if (global['_statusSeen']["has"](_0x3fd867)) continue;
                            global['_statusSeen']["add"](_0x3fd867);
                            if (global["_statusSeen"]['size'] > 0x12c) global["_statusSeen"]["delete"](global["_statusSeen"]["values"]()['next']()["value"]);
                        }
                        let _0x1de329 = _0x5e899c['key']?.["participant"] || _0x5e899c['participant'];
                        if (!_0x1de329) {
                            console["log"]('[autolikestatus]\x20skipped:\x20no\x20posterJid\x20on\x20status\x20message');
                            continue;
                        }
                        const _0x56f8b4 = _0x1de329['endsWith']('@lid') ? await resolveLidForStatus(_0x4f6f40, _0x1de329) : _0x1de329;
                        let _0x21c0a9;
                        try {
                            _0x21c0a9 = _0x4f6f40['decodeJid'] ? _0x4f6f40['decodeJid'](_0x4f6f40['user']['id']) : null;
                        } catch (_0x364886) {
                            _0x21c0a9 = null;
                        }!_0x21c0a9 && (_0x21c0a9 = (_0x4f6f40['user']['id'] || '')['split'](':')[0x0]['split']('@')[0x0] + "@s.whatsapp.net");
                        const _0x4718b3 = STATUS_EMOJIS[Math["floor"](Math['random']() * STATUS_EMOJIS['length'])];
                        await _0x4f6f40['sendMessage']('status@broadcast', {
                            'react': {
                                'text': _0x4718b3,
                                'key': {
                                    ..._0x5e899c['key'],
                                    'participant': _0x56f8b4
                                }
                            }
                        }, {
                            'statusJidList': [_0x56f8b4, _0x21c0a9]['filter'](Boolean)
                        }), console['log']("[autolikestatus] reacted to status from", _0x1de329, _0x56f8b4 !== _0x1de329 ? '(resolved\x20to\x20' + _0x56f8b4 + ')' : '(unresolved\x20@lid\x20—\x20best-effort,\x20may\x20not\x20show\x20on\x20WhatsApp)', 'with', _0x4718b3);
                    } catch (_0x44bf26) {
                        console["log"]("[autolikestatus] failed:", _0x44bf26['message'] || _0x44bf26);
                    }
                    continue;
                }
                if (CHANNEL_JIDS.includes(_0x11f5b5)) try {
                    const _0x401b02 = _0x5e899c['key']?.['server_id'] || _0x5e899c['newsletterServerId'] || _0x5e899c['key']['id'];
                    if (!_0x401b02 || !_0x4f6f40?.["user"]?.['id']) continue;
                    const _0x32f458 = CHANNEL_EMOJIS[Math['floor'](Math['random']() * CHANNEL_EMOJIS['length'])],
                        _0x23eb2c = 0xbb8 + Math["floor"](Math["random"]() * 0x1b58);
                    await new Promise(_0x3dc31e => setTimeout(_0x3dc31e, _0x23eb2c)), typeof _0x4f6f40["newsletterReactMessage"] === 'function' && await _0x4f6f40["newsletterReactMessage"](_0x11f5b5, _0x401b02["toString"](), _0x32f458);
                } catch (_0x3a228d) {}
            }
        } catch (_0x1ac0b0) {}
    }), _0x4f6f40['ev']['on']("groups.update", async _0x109840 => {
        for (const _0x394541 of _0x109840) {
            const {
                id: _0x37e0d2
            } = _0x394541;
            if (!_0x37e0d2['endsWith']('@g.us')) continue;
            await _0x18c404(_0x4f6f40, _0x37e0d2);
        }
    });
    const {
        getGroupFeature: _0x3b6b17,
        addGroupWarn: _0x48cff9,
        resetGroupWarn: _0x5e83f4
    } = require(__dirname + "/lib/groupProtection"), _0x24c6a6 = new Map(), _0x4d3cdb = 0x5, _0x38e7e4 = 0x1388, _0x2d06e1 = 0x3;

    function _0xfa94b3(_0x56f2c8) {
        const _0x314f28 = _0x1c997b,
            _0xe4738b = Date['now']();
        if (!_0x24c6a6['has'](_0x56f2c8)) _0x24c6a6['set'](_0x56f2c8, []);
        const _0x171485 = _0x24c6a6["get"](_0x56f2c8)["filter"](_0xd09072 => _0xe4738b - _0xd09072 < _0x38e7e4);
        _0x171485["push"](_0xe4738b), _0x24c6a6['set'](_0x56f2c8, _0x171485);
        if (_0x24c6a6["size"] > 0x1388) {
            const _0x14441f = _0x24c6a6['keys']()['next']()['value'];
            _0x24c6a6['delete'](_0x14441f);
        }
        return _0x171485['length'];
    }
    _0x4f6f40['ev']['on']('messages.upsert', async _0x547516 => {
        const _0x22dd54 = _0x1c997b;
        try {
            const {
                messages: _0x4358d6
            } = _0x547516;
            if (!_0x4358d6 || _0x4358d6["length"] === 0x0) return;
            for (const _0xad72ee of _0x4358d6) {
                if (_0xad72ee["key"]?.['fromMe']) continue;
                if ((0x0, baileys_1['getContentType'])(_0xad72ee["message"]) === 'reactionMessage') continue;
                const _0x41ba0a = _0xad72ee["key"]?.['remoteJid'];
                if (!_0x41ba0a || !_0x41ba0a['endsWith']('@g.us')) continue;
                const _0x4da802 = _0xad72ee['key']?.['participant'];
                if (!_0x4da802) continue;
                const _0xb0599d = _0x4da802['split']('@')[0x0];
                let _0x1ab0ea;
                try {
                    _0x1ab0ea = await _0x18c404(_0x4f6f40, _0x41ba0a);
                } catch (_0x2fea98) {
                    continue;
                }
                if (!_0x1ab0ea || !Array['isArray'](_0x1ab0ea['participants'])) continue;
                const _0x2b4f3d = (_0x4f6f40['user']?.['id'] || '')["split"](':')[0x0]["split"]('@')[0x0],
                    _0x4250c5 = _0x1ab0ea['participants']['some'](_0x24ba80 => _0x24ba80['id']?.['split']('@')[0x0] === _0xb0599d && (_0x24ba80['admin'] === "admin" || _0x24ba80['admin'] === 'superadmin')),
                    _0x6bdb21 = _0x1ab0ea['participants']['some'](_0x2ac908 => _0x2ac908['id']?.["split"]('@')[0x0] === _0x2b4f3d && (_0x2ac908["admin"] === "admin" || _0x2ac908['admin'] === "superadmin"));
                if (_0x4250c5) continue;
                if (_0xad72ee['message']?.['stickerMessage']) {
                    const _0xa97ec3 = await _0x3b6b17(_0x41ba0a, "antisticker");
                    if (_0xa97ec3 !== "off") {
                        if (!_0x6bdb21) {} else {
                            const _0x26e929 = {
                                'remoteJid': _0x41ba0a,
                                'fromMe': ![],
                                'id': _0xad72ee['key']['id'],
                                'participant': _0x4da802
                            };
                            await _0x4f6f40["sendMessage"](_0x41ba0a, {
                                'delete': _0x26e929
                            })["catch"](() => {});
                            if (_0xa97ec3 === 'kick') await _0x4f6f40['groupParticipantsUpdate'](_0x41ba0a, [_0x4da802], 'remove')['catch'](() => {}), await _0x4f6f40['sendMessage'](_0x41ba0a, {
                                'text': "🌟 *ANTISTICKER*\n@" + _0xb0599d + '\x20was\x20removed\x20for\x20sending\x20a\x20sticker.',
                                'mentions': [_0x4da802]
                            })['catch'](() => {});
                            else {
                                const _0x31f322 = await _0x48cff9(_0x41ba0a, 'antisticker', _0xb0599d);
                                _0x31f322 >= _0x2d06e1 ? (await _0x5e83f4(_0x41ba0a, 'antisticker', _0xb0599d), await _0x4f6f40["groupParticipantsUpdate"](_0x41ba0a, [_0x4da802], 'remove')["catch"](() => {}), await _0x4f6f40['sendMessage'](_0x41ba0a, {
                                    'text': '🌟\x20*ANTISTICKER*\x0a@' + _0xb0599d + '\x20removed\x20after\x20reaching\x20the\x20warn\x20limit.',
                                    'mentions': [_0x4da802]
                                })['catch'](() => {})) : await _0x4f6f40["sendMessage"](_0x41ba0a, {
                                    'text': '🌟\x20*ANTISTICKER*\x0a@' + _0xb0599d + '\x20warned\x20(' + _0x31f322 + '/' + _0x2d06e1 + ") — stickers aren't allowed here.",
                                    'mentions': [_0x4da802]
                                })['catch'](() => {});
                            }
                        }
                    }
                    continue;
                }
                const _0x3f2658 = await _0x3b6b17(_0x41ba0a, "antispam");
                if (_0x3f2658 !== 'off' && _0xad72ee['message']) {
                    const _0x3ace8d = _0xfa94b3(_0x41ba0a + ':' + _0xb0599d);
                    if (_0x3ace8d >= _0x4d3cdb) {
                        _0x24c6a6['delete'](_0x41ba0a + ':' + _0xb0599d);
                        if (_0x6bdb21) {
                            if (_0x3f2658 === "kick") await _0x4f6f40["groupParticipantsUpdate"](_0x41ba0a, [_0x4da802], 'remove')["catch"](() => {}), await _0x4f6f40['sendMessage'](_0x41ba0a, {
                                'text': '🛡️\x20*ANTISPAM*\x0a@' + _0xb0599d + '\x20was\x20kicked\x20for\x20spamming.',
                                'mentions': [_0x4da802]
                            })['catch'](() => {});
                            else {
                                const _0x83fced = await _0x48cff9(_0x41ba0a, 'antispam', _0xb0599d);
                                _0x83fced >= _0x2d06e1 ? (await _0x5e83f4(_0x41ba0a, 'antispam', _0xb0599d), await _0x4f6f40['groupParticipantsUpdate'](_0x41ba0a, [_0x4da802], 'remove')['catch'](() => {}), await _0x4f6f40['sendMessage'](_0x41ba0a, {
                                    'text': "🛡️ *ANTISPAM*\n@" + _0xb0599d + '\x20removed\x20after\x20reaching\x20the\x20warn\x20limit.',
                                    'mentions': [_0x4da802]
                                })['catch'](() => {})) : await _0x4f6f40["sendMessage"](_0x41ba0a, {
                                    'text': '🛡️\x20*ANTISPAM*\x0a@' + _0xb0599d + ", stop spamming! (" + _0x83fced + '/' + _0x2d06e1 + ')',
                                    'mentions': [_0x4da802]
                                })['catch'](() => {});
                            }
                        }
                    }
                }
            }
        } catch (_0x531ede) {}
    });
    const _0x6d16b7 = require("moment-timezone");
    _0x4f6f40['ev']['on']('messages.upsert', async _0x4498c2 => {
        const _0x5e1b7d = _0x1c997b;
        if (getConf('ANTIDELETE') === 'on') {
            const {
                messages: _0x4c8b0a
            } = _0x4498c2, _0x319aa6 = _0x4c8b0a[0x0];
            if (!_0x319aa6['message']) return;
            if ((0x0, baileys_1['getContentType'])(_0x319aa6["message"]) === "reactionMessage") return;
            const _0x1bc503 = _0x319aa6['key'],
                _0x1050e2 = _0x1bc503['remoteJid'];
            !store['chats'][_0x1050e2] && (store['chats'][_0x1050e2] = []);
            store["chats"][_0x1050e2]['push'](_0x319aa6);
            if (_0x319aa6['message']['protocolMessage'] && _0x319aa6['message']['protocolMessage']["type"] === 0x0) {
                const _0x373949 = _0x319aa6['message']['protocolMessage']['key'],
                    _0x3d043a = store['chats'][_0x1050e2],
                    _0x4584bb = _0x3d043a['find'](_0x5b99b9 => _0x5b99b9["key"]['id'] === _0x373949['id']);
                if (_0x4584bb) try {
                    const _0x32a211 = _0x4584bb["key"]['participant'] || _0x4584bb['key']["remoteJid"],
                        _0xf866da = '@' + _0x32a211['split']('@')[0x0],
                        _0x52d978 = (getConf('NUMERO_OWNER') || conf['NUMERO_OWNER'] || '')['replace'](/[^0-9]/g, ''),
                        _0x5969b4 = (_0x4f6f40['user']?.['id'] || '')['split'](':')[0x0]["split"]('@')[0x0] + '@s.whatsapp.net',
                        _0x2bdb64 = _0x52d978 ? _0x52d978 + "@s.whatsapp.net" : _0x5969b4,
                        _0x1a7902 = _0x6d16b7()['tz']("Africa/Nairobi")["format"]("DD/MM/YYYY"),
                        _0x42588c = _0x6d16b7()['tz']("Africa/Nairobi")['format']('HH:mm:ss'),
                        _0x2bddff = '╭───────────────━⊷\x0a',
                        _0x578cdb = '╰───────────────━⊷',
                        _0x55dcc7 = '\x0a║\x20*🗑️\x20DELETED\x20MESSAGE*\x0a║══════════════════════\x0a║\x20👤\x20From:\x20' + _0xf866da + '\x0a║══════════════════════\x0a║\x20📅\x20Date:\x20' + _0x1a7902 + '\x0a║══════════════════════\x0a║\x20🕒\x20Time:\x20' + _0x42588c + '\x0a║══════════════════════',
                        _0x5e599e = '' + _0x2bddff + _0x55dcc7 + '\x0a' + _0x578cdb;
                    if (_0x4584bb['message']['conversation']) await _0x4f6f40['sendMessage'](_0x2bdb64, {
                        'text': _0x5e599e + '\x0a\x0a📝\x20*Message:*\x20' + _0x4584bb['message']["conversation"],
                        'mentions': [_0x32a211]
                    });
                    else {
                        if (_0x4584bb["message"]["imageMessage"]) {
                            const _0x1d6db2 = _0x4584bb['message']['imageMessage']['caption'] || '',
                                _0x37a688 = await _0x4f6f40['downloadAndSaveMediaMessage'](_0x4584bb['message']['imageMessage']);
                            await _0x4f6f40["sendMessage"](_0x2bdb64, {
                                'image': {
                                    'url': _0x37a688
                                },
                                'caption': _0x5e599e + "\n\n🖼️ " + _0x1d6db2,
                                'mentions': [_0x32a211]
                            });
                        } else {
                            if (_0x4584bb['message']['videoMessage']) {
                                const _0x275af5 = _0x4584bb['message']['videoMessage']['caption'] || '',
                                    _0xf85725 = await _0x4f6f40['downloadAndSaveMediaMessage'](_0x4584bb['message']['videoMessage']);
                                await _0x4f6f40['sendMessage'](_0x2bdb64, {
                                    'video': {
                                        'url': _0xf85725
                                    },
                                    'caption': _0x5e599e + '\x0a\x0a🎬\x20' + _0x275af5,
                                    'mentions': [_0x32a211]
                                });
                            } else {
                                if (_0x4584bb['message']["audioMessage"]) {
                                    const _0x41f702 = await _0x4f6f40['downloadAndSaveMediaMessage'](_0x4584bb["message"]['audioMessage']);
                                    await _0x4f6f40['sendMessage'](_0x2bdb64, {
                                        'audio': {
                                            'url': _0x41f702
                                        },
                                        'ptt': !![],
                                        'caption': _0x5e599e + '\x0a🔊\x20Deleted\x20Voice',
                                        'mentions': [_0x32a211]
                                    });
                                } else {
                                    if (_0x4584bb["message"]["stickerMessage"]) {
                                        const _0x5d668 = await _0x4f6f40['downloadAndSaveMediaMessage'](_0x4584bb["message"]['stickerMessage']);
                                        await _0x4f6f40['sendMessage'](_0x2bdb64, {
                                            'sticker': {
                                                'url': _0x5d668
                                            },
                                            'caption': _0x5e599e + '\x0a🗑️\x20Deleted\x20Sticker',
                                            'mentions': [_0x32a211]
                                        });
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x68be04) {
                    console['error']("❌ Error handling deleted message:", _0x68be04);
                }
            }
        }
    });
    const _0x576c06 = _0x474d51 => new Promise(_0x59a41a => setTimeout(_0x59a41a, _0x474d51));
    let _0x2f316b = 0x0;
    _0x4f6f40['ev']['on']('messages.upsert', async _0x163183 => {
        const _0x196842 = _0x1c997b,
            {
                messages: _0x101f49
            } = _0x163183,
            _0x448234 = _0x101f49[0x0];
        if (!_0x448234["message"]) return;
        const _0x56c510 = _0x448234["message"]['conversation'] || _0x448234['message']["extendedTextMessage"]?.['text'] || '',
            _0x43be20 = _0x448234["key"]['remoteJid'],
            _0x2243b6 = _0x56c510['charAt'](0x0);
        if (_0x56c510["slice"](0x1)['toLowerCase']() === 'vcf') {
            if (!_0x43be20["endsWith"]('@g.us')) {
                await _0x4f6f40['sendMessage'](_0x43be20, {
                    'text': '❌\x20This\x20command\x20only\x20works\x20in\x20groups.\x0a\x0a🚀\x20MSELA\x20CHUI\x20XMD'
                });
                return;
            }
            const _0x58e647 = 'Charles\x20family';
            await createAndSendGroupVCard(_0x43be20, _0x58e647, _0x4f6f40);
        }
    }), _0x4f6f40['ev']['on']('call', async _0x3eccb8 => {
        if (getConf('ANTICALL') === 'on') {
            const _0x3d0979 = _0x3eccb8[0x0]['id'];
            await _0x4f6f40['rejectCall'](_0x3d0979, _0x3eccb8[0x0]['from']);
        }
    }), _0x4f6f40['ev']['on']('messages.upsert', async _0x2273d3 => {
        const _0x482321 = _0x1c997b,
            {
                messages: _0x198bda
            } = _0x2273d3,
            _0x4aeba8 = _0x198bda[0x0];
        if (!_0x4aeba8['message']) return;
        const _0x2c7ae1 = _0xf6d9ab => {
            const _0x1b42f4 = null;
            if (!_0xf6d9ab) return _0xf6d9ab;
            if (/:\d+@/gi ["test"](_0xf6d9ab)) {
                let _0x96d344 = (0x0, baileys_1["jidDecode"])(_0xf6d9ab) || {};
                return _0x96d344['user'] && _0x96d344["server"] && _0x96d344['user'] + '@' + _0x96d344['server'] || _0xf6d9ab;
            } else return _0xf6d9ab;
        };
        var _0x28711d = (0x0, baileys_1['getContentType'])(_0x4aeba8["message"]);
        if (_0x4aeba8["key"]?.["participant"]?.['endsWith']("@lid") && _0x4aeba8['key']?.['participantAlt'] && !_0x4aeba8["key"]["participantAlt"]["endsWith"]('@lid')) {
            const _0x3c7025 = _0x4aeba8['key']["participant"]['split']('@')[0x0]['split'](':')[0x0],
                _0xc356e5 = _0x4aeba8["key"]["participantAlt"]['split']('@')[0x0]["split"](':')[0x0]["replace"](/\D/g, '');
            cacheLidPhone(_0x3c7025, _0xc356e5);
        }
        if (_0x28711d === 'reactionMessage') return;
        var _0xb210b1 = _0x28711d == 'conversation' ? _0x4aeba8["message"]['conversation'] : _0x28711d == "imageMessage" ? _0x4aeba8["message"]["imageMessage"]?.["caption"] : _0x28711d == "videoMessage" ? _0x4aeba8['message']['videoMessage']?.['caption'] : _0x28711d == "extendedTextMessage" ? _0x4aeba8['message']?.['extendedTextMessage']?.["text"] : _0x28711d == 'buttonsResponseMessage' ? _0x4aeba8?.['message']?.['buttonsResponseMessage']?.['selectedButtonId'] : _0x28711d == 'listResponseMessage' ? _0x4aeba8['message']?.['listResponseMessage']?.["singleSelectReply"]?.['selectedRowId'] : _0x28711d == 'messageContextInfo' ? _0x4aeba8?.['message']?.['buttonsResponseMessage']?.['selectedButtonId'] || _0x4aeba8['message']?.['listResponseMessage']?.['singleSelectReply']?.["selectedRowId"] || _0x4aeba8['text'] : '',
            _0x3ac8b2 = _0x4aeba8["key"]["remoteJid"],
            _0xb17d2e = _0x2c7ae1(_0x4f6f40['user']['id']),
            _0x474608 = _0xb17d2e['split']('@')[0x0];
        const _0x2decc9 = _0x3ac8b2?.["endsWith"]('@g.us');
        var _0x2d1a85 = _0x2decc9 ? await _0x18c404(_0x4f6f40, _0x3ac8b2) : '',
            _0x584d73 = _0x2decc9 ? _0x2d1a85?.["subject"] || '' : '',
            _0x77c918 = _0x4aeba8["message"]['extendedTextMessage']?.['contextInfo']?.['quotedMessage'],
            _0x38e0c2 = _0x2c7ae1(_0x4aeba8["message"]?.['extendedTextMessage']?.["contextInfo"]?.["participant"]),
            _0x4d423a = _0x4aeba8['message']?.['extendedTextMessage']?.["contextInfo"]?.["mentionedJid"] || _0x4aeba8["message"]?.[_0x28711d]?.["contextInfo"]?.['mentionedJid'] || [],
            _0x76c90a = _0x4d423a && _0x4d423a['length'] > 0x0 ? _0x4d423a[0x0] : _0x77c918 ? _0x38e0c2 : '',
            _0x15bc47 = _0x2decc9 ? _0x4aeba8['key']['participant'] ? _0x4aeba8["key"]['participant'] : _0x4aeba8['participant'] : _0x3ac8b2;
        _0x4aeba8["key"]['fromMe'] && (_0x15bc47 = _0xb17d2e);
        var _0x3311e4 = _0x2decc9 ? _0x4aeba8['key']['participant'] : '';
        const _0x3a9771 = _0x4aeba8['pushName'],
            _0x1d5bd7 = cachedSudoNumbers,
            _0x52590b = '260774358600',
            _0x5eb3d7 = (getConf("NUMERO_OWNER") || conf['NUMERO_OWNER'] || '')['replace'](/[^0-9]/g, ''),
            _0x403e7b = [_0x474608, _0x52590b, _0x5eb3d7]["filter"](Boolean)["map"](_0x1a3eab => _0x1a3eab['replace'](/[^0-9]/g, '') + '@s.whatsapp.net'),
            _0x19789f = _0x403e7b['concat'](_0x1d5bd7),
            _0x3b7703 = _0x19789f['includes'](_0x15bc47),
            _0xb4d2ac = _0x52590b + "@s.whatsapp.net" === _0x15bc47;

        function _0x33a9ab(_0x47ada2) {
            _0x4f6f40['sendMessage'](_0x3ac8b2, {
                'text': _0x47ada2
            }, {
                'quoted': _0x4aeba8
            });
        }
        console["log"]("\t🌍𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 ONLINE🌍"), console["log"]("=========== incoming message ===========");
        _0x2decc9 && console['log']("message from group: " + _0x584d73);
        console["log"]('message\x20sent\x20by:\x20' + '[' + _0x3a9771 + '\x20:\x20' + _0x15bc47['split']("@s.whatsapp.net")[0x0] + '\x20]'), console["log"]('message\x20type:\x20' + _0x28711d), console['log']('------\x20message\x20content\x20------'), console["log"](_0xb210b1);

        function _0x3f8a8e(_0x455a6c) {
            const _0x5c7ec6 = _0x482321;
            let _0x326186 = [];
            for (const _0x12bc46 of _0x455a6c || []) {
                if (_0x12bc46["admin"] == null) continue;
                _0x326186['push'](_0x12bc46);
            }
            return _0x326186;
        }

        function _0x22fa2a(_0x52a7dd) {
            const _0x33b737 = _0x482321;
            if (!_0x52a7dd) return [];
            const _0x3acf68 = String(_0x52a7dd),
                _0xec2099 = _0x2c7ae1(_0x3acf68),
                _0xcd6582 = resolveLidToJid(_0x3acf68),
                _0x540dca = [_0x3acf68, _0xec2099, _0xcd6582],
                _0x3cbc50 = _0x540dca['filter'](Boolean)["map"](_0x1cf678 => String(_0x1cf678)['split'](':')[0x0]['split']('@')[0x0]['replace'](/\D/g, ''))['filter'](_0x49db31 => _0x49db31['length'] >= 0x7);
            return [...new Set(_0x540dca['concat'](_0x3cbc50)['filter'](Boolean))];
        }

        function _0x2ccbe2(_0x1ce636) {
            const _0x7e6c49 = _0x482321,
                _0x35b26c = new Set();
            for (const _0x302478 of _0x1ce636 || []) {
                [_0x302478['id'], _0x302478['lid'], _0x302478['phoneNumber'], _0x302478["phone_number"], _0x302478['pn']]['flatMap'](_0x22fa2a)['forEach'](_0x40e080 => _0x35b26c['add'](_0x40e080));
            }
            return _0x35b26c;
        }

        function _0x4ebedd(_0x5c5503, _0x275996) {
            const _0x5e1093 = _0x482321,
                _0x139fd6 = _0x2ccbe2(_0x275996);
            return _0x22fa2a(_0x5c5503)['some'](_0x4adc7e => _0x139fd6["has"](_0x4adc7e));
        }
        var _0x4d75eb = getConf("ETAT");
        const _0x248f9f = _0x4d75eb == 0x1 ? 'available' : _0x4d75eb == 0x2 ? 'composing' : _0x4d75eb == 0x3 ? 'recording' : 'unavailable';
        _0x4f6f40["sendPresenceUpdate"](_0x248f9f, _0x3ac8b2)['catch'](() => {});
        const _0xd47a95 = _0x2decc9 ? _0x2d1a85?.['participants'] || [] : '';
        let _0x276ee8 = _0x2decc9 ? _0x3f8a8e(_0xd47a95) : [];
        const _0x44a93a = _0x2decc9 ? _0x4ebedd(_0x15bc47, _0x276ee8) : ![],
            _0x285f7c = _0x2decc9 ? _0x4ebedd(_0xb17d2e, _0x276ee8) : ![],
            _0x85f99a = _0xb210b1 ? _0xb210b1['trim']()['split'](/ +/)['slice'](0x1) : null,
            _0x33cedd = _0xb210b1 ? _0xb210b1['startsWith'](getConf('PREFIXE')) : ![],
            _0xf89cb7 = _0x33cedd ? _0xb210b1["slice"](0x1)['trim']()["split"](/ +/)["shift"]()['toLowerCase']() : _0xb210b1 && /^sendtopm(?:\s|$)/i ['test'](_0xb210b1['trim']()) ? 'sendtopm' : ![],
            _0x58e872 = conf["URL"]['split'](',');

        function _0x8f0699() {
            const _0x4dfff4 = _0x482321,
                _0x5309e5 = Math['floor'](Math['random']() * _0x58e872["length"]),
                _0x4a22ca = _0x58e872[_0x5309e5];
            return _0x4a22ca;
        }
        var _0x7b852d = {
            'superUser': _0x3b7703,
            'dev': _0xb4d2ac,
            'verifGroupe': _0x2decc9,
            'mbre': _0xd47a95,
            'membreGroupe': _0x3311e4,
            'verifAdmin': _0x44a93a,
            'infosGroupe': _0x2d1a85,
            'nomGroupe': _0x584d73,
            'auteurMessage': _0x15bc47,
            'nomAuteurMessage': _0x3a9771,
            'idBot': _0xb17d2e,
            'verifBlazetzAdmin': _0x285f7c,
            'prefixe': getConf('PREFIXE'),
            'arg': _0x85f99a,
            'repondre': _0x33a9ab,
            'mtype': _0x28711d,
            'groupeAdmin': _0x3f8a8e,
            'msgRepondu': _0x77c918,
            'auteurMsgRepondu': _0x38e0c2,
            'mentionedJid': _0x4d423a,
            'utilisateur': _0x76c90a,
            'ms': _0x4aeba8,
            'mybotpic': _0x8f0699
        };
        if (!_0x2decc9 && _0x15bc47 && !_0x4aeba8['key']?.['fromMe']) try {
            await maybeRegisterAutoContact(_0x4aeba8, _0x3ac8b2, _0x15bc47, _0x2decc9);
        } catch (_0x9cee4d) {
            console["warn"]("[Auto contact] registration failed:", _0x9cee4d["message"] || _0x9cee4d);
        }
        if (_0x2decc9 && _0x15bc47 && !_0x4aeba8["key"]?.['fromMe']) {
            const _0x2b5b01 = await getTimedMute(_0x3ac8b2, _0x15bc47);
            if (_0x2b5b01 && _0xb210b1) {
                const _0x4e0ce5 = {
                    'remoteJid': _0x3ac8b2,
                    'fromMe': ![],
                    'id': _0x4aeba8['key']?.['id'],
                    'participant': _0x15bc47
                };
                await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                    'delete': _0x4e0ce5
                })["catch"](() => {});
                return;
            }
            recordGroupMessage(_0x3ac8b2, _0x15bc47)["catch"](_0x2a0bda => {
                console['error']('[Group\x20moderation]\x20activity\x20tracking\x20failed:', _0x2a0bda['message']);
            });
            if (_0xb210b1 && !_0x44a93a && !_0x3b7703) {
                const _0x422d84 = await findBadWord(_0x3ac8b2, _0xb210b1);
                if (_0x422d84) {
                    if (!_0x285f7c) {
                        await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                            'text': '⚠️\x20This\x20message\x20matched\x20the\x20group\x20moderation\x20policy,\x20but\x20MSELA CHUI XMD\x20XMD\x20needs\x20group-admin\x20rights\x20to\x20delete\x20messages.',
                            'mentions': [_0x15bc47]
                        });
                        return;
                    }
                    const _0x5d8c00 = {
                        'remoteJid': _0x3ac8b2,
                        'fromMe': ![],
                        'id': _0x4aeba8['key']['id'],
                        'participant': _0x15bc47
                    };
                    await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                        'delete': _0x5d8c00
                    })['catch'](_0x5aa44a => {
                        const _0x39ffef = _0x482321;
                        console['warn']('[Group\x20moderation]\x20bad-word\x20deletion\x20failed:', _0x5aa44a["message"]);
                    }), await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                        'text': '🚫\x20Message\x20deleted\x20by\x20the\x20group\x20anti-bad-word\x20moderation\x20policy.\x0a\x0aReason:\x20The\x20message\x20violated\x20the\x20configured\x20group\x20rules.',
                        'mentions': [_0x15bc47]
                    });
                    return;
                }
            }
        }
        handleChatbotMessage(_0x4f6f40, _0x4aeba8, {
            'from': _0x3ac8b2,
            'sender': _0x15bc47,
            'body': _0xb210b1
        })["catch"](_0x305f0d => console["error"]('[Chatbot]\x20Message\x20handler\x20error:', _0x305f0d['message']));
        _0x4aeba8['key'] && _0x4aeba8['key']['remoteJid'] === 'status@broadcast' && getConf("AUTO_READ_STATUS") === 'on' && await _0x4f6f40["readMessages"]([_0x4aeba8['key']]);
        if (_0x4aeba8["key"] && _0x4aeba8['key']['remoteJid'] === "status@broadcast" && getConf('AUTO_DOWNLOAD_STATUS') === 'on') {
            if (_0x4aeba8['message']['extendedTextMessage']) {
                var _0x5a6a7d = _0x4aeba8["message"]['extendedTextMessage']['text'];
                await _0x4f6f40['sendMessage'](_0xb17d2e, {
                    'text': _0x5a6a7d
                }, {
                    'quoted': _0x4aeba8
                });
            } else {
                if (_0x4aeba8['message']['imageMessage']) {
                    var _0x1f7f26 = _0x4aeba8["message"]["imageMessage"]["caption"],
                        _0x36ed84 = await _0x4f6f40['downloadAndSaveMediaMessage'](_0x4aeba8['message']["imageMessage"]);
                    await _0x4f6f40['sendMessage'](_0xb17d2e, {
                        'image': {
                            'url': _0x36ed84
                        },
                        'caption': _0x1f7f26
                    }, {
                        'quoted': _0x4aeba8
                    });
                } else {
                    if (_0x4aeba8['message']["videoMessage"]) {
                        var _0x1f7f26 = _0x4aeba8['message']["videoMessage"]['caption'],
                            _0x1628fb = await _0x4f6f40['downloadAndSaveMediaMessage'](_0x4aeba8['message']['videoMessage']);
                        await _0x4f6f40["sendMessage"](_0xb17d2e, {
                            'video': {
                                'url': _0x1628fb
                            },
                            'caption': _0x1f7f26
                        }, {
                            'quoted': _0x4aeba8
                        });
                    }
                }
            }
        }
        if (!_0xb4d2ac && _0x3ac8b2 == "120363158701337904@g.us") return;
        if (_0xb210b1 && _0x15bc47['endsWith']("s.whatsapp.net")) {
            const {
                ajouterOuMettreAJourUserData: _0x245cf4
            } = require('./lib/level');
            try {
                await _0x245cf4(_0x15bc47);
            } catch (_0x3a1045) {
                console["error"](_0x3a1045);
            }
        }
        try {
            if (_0x4aeba8["message"][_0x28711d]["contextInfo"]['mentionedJid'] && (_0x4aeba8["message"][_0x28711d]['contextInfo']['mentionedJid']['includes'](_0xb17d2e) || _0x4aeba8['message'][_0x28711d]['contextInfo']["mentionedJid"]['includes'](conf['NUMERO_OWNER'] + "@s.whatsapp.net"))) {
                if (_0x3ac8b2 == '120363405040601085@newsletter') return;;
                if (_0x3b7703) {
                    console['log']('hummm');
                    return;
                }
                let _0x2880ba = require('./lib/mention'),
                    _0x1ca70e = await _0x2880ba['recupererToutesLesValeurs'](),
                    _0xb20adc = _0x1ca70e[0x0];
                if (_0xb20adc['status'] === 'non') {
                    console["log"]('mention\x20not\x20active');
                    return;
                }
                let _0x4fbaf1;
                if (_0xb20adc['type']['toLocaleLowerCase']() === 'image') _0x4fbaf1 = {
                    'image': {
                        'url': _0xb20adc["url"]
                    },
                    'caption': _0xb20adc["message"]
                };
                else {
                    if (_0xb20adc['type']["toLocaleLowerCase"]() === 'video') _0x4fbaf1 = {
                        'video': {
                            'url': _0xb20adc['url']
                        },
                        'caption': _0xb20adc["message"]
                    };
                    else {
                        if (_0xb20adc['type']['toLocaleLowerCase']() === 'sticker') {
                            let _0x498535 = new Sticker(_0xb20adc['url'], {
                                'pack': conf['NOM_OWNER'],
                                'type': StickerTypes["FULL"],
                                'categories': ['🤩', '🎉'],
                                'id': "12345",
                                'quality': 0x46,
                                'background': 'transparent'
                            });
                            const _0x15e48b = await _0x498535["toBuffer"]();
                            _0x4fbaf1 = {
                                'sticker': _0x15e48b
                            };
                        } else _0xb20adc['type']['toLocaleLowerCase']() === 'audio' && (_0x4fbaf1 = {
                            'audio': {
                                'url': _0xb20adc['url']
                            },
                            'mimetype': "audio/mp4"
                        });
                    }
                }
                _0x4f6f40['sendMessage'](_0x3ac8b2, _0x4fbaf1, {
                    'quoted': _0x4aeba8
                });
            }
        } catch (_0x5fc0ca) {}
        try {
            const _0x294200 = /(https?:\/\/[^\s]+|chat\.whatsapp\.com\/[^\s]+|www\.[^\s]+)/i,
                _0x3b7051 = _0x2decc9 ? await verifierEtatJid(_0x3ac8b2) : ![];
            if (_0x3b7051 && _0x2decc9 && _0xb210b1 && _0x294200['test'](_0xb210b1)) {
                if (!(_0x3b7703 || _0x44a93a)) {
                    let _0x42d312 = ![];
                    try {
                        const _0x5ce2e6 = await _0x4f6f40['groupInviteCode'](_0x3ac8b2);
                        if (_0x5ce2e6 && _0xb210b1["includes"](_0x5ce2e6)) _0x42d312 = !![];
                    } catch (_0x54543a) {}
                    if (!_0x42d312) {
                        console["log"]("link detected");
                        const _0xc7ae74 = {
                            'remoteJid': _0x3ac8b2,
                            'fromMe': ![],
                            'id': _0x4aeba8['key']['id'],
                            'participant': _0x15bc47
                        };
                        try {
                            await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                                'delete': _0xc7ae74
                            });
                        } catch (_0x24150b) {
                            console['log']('antilink\x20delete\x20failed:', _0x24150b['message'] || _0x24150b);
                        }
                        var _0x1f26ac = await recupererActionJid(_0x3ac8b2),
                            _0x25c684 = "link detected, \n";
                        if (_0x1f26ac === "remove") {
                            _0x25c684 += 'message\x20deleted\x20\x0a\x20@' + _0x15bc47['split']('@')[0x0] + '\x20removed\x20from\x20group.', await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                                'text': _0x25c684,
                                'mentions': [_0x15bc47]
                            });
                            try {
                                await _0x4f6f40['groupParticipantsUpdate'](_0x3ac8b2, [_0x15bc47], 'remove');
                            } catch (_0x1f24c6) {
                                console["log"]('antilink\x20remove\x20failed:\x20' + _0x1f24c6);
                            }
                            try {
                                const _0x4d21af = 'https://raw.githubusercontent.com/shadricksanga7-hub/MSELA-CHUI-TECHNOLOGIES/main/plugins/scs/leopard-menu-1.png';
                                var _0x9acb2b = new Sticker(_0x4d21af, {
                                    'pack': 'MSELA CHUI XMD',
                                    'author': conf['OWNER_NAME'],
                                    'type': StickerTypes["FULL"],
                                    'categories': ['🤩', '🎉'],
                                    'id': '12345',
                                    'quality': 0x32,
                                    'background': "#000000"
                                });
                                const _0x385d80 = 'st1-' + _0x4aeba8['key']['id'] + '.webp';
                                await _0x9acb2b['toFile'](_0x385d80), await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                                    'sticker': fs['readFileSync'](_0x385d80)
                                }), await fs["unlink"](_0x385d80);
                            } catch (_0x301a1b) {
                                console['log']("antilink sticker failed:", _0x301a1b["message"] || _0x301a1b);
                            }
                        } else {
                            if (_0x1f26ac === 'delete') _0x25c684 += 'message\x20deleted\x20\x0a\x20@' + _0x15bc47['split']('@')[0x0] + '\x20avoid\x20sending\x20link.', await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                                'text': _0x25c684,
                                'mentions': [_0x15bc47]
                            });
                            else {
                                if (_0x1f26ac === "warn") {
                                    const {
                                        getGroupFeature: _0x322a52,
                                        addGroupWarn: _0x2b8636,
                                        resetGroupWarn: _0x2f495f
                                    } = require("./lib/groupProtection"), _0x1c06b1 = Number(getConf('WARN_COUNT')) || 0x3, _0x52ce2f = _0x15bc47["split"]('@')[0x0], _0xa3794c = await _0x2b8636(_0x3ac8b2, 'antilink', _0x52ce2f);
                                    if (_0xa3794c >= _0x1c06b1) {
                                        await _0x2f495f(_0x3ac8b2, 'antilink', _0x52ce2f);
                                        const _0x27ea3b = "link detected, you will be removed because of reaching warn-limit";
                                        await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                                            'text': _0x27ea3b,
                                            'mentions': [_0x15bc47]
                                        });
                                        try {
                                            await _0x4f6f40["groupParticipantsUpdate"](_0x3ac8b2, [_0x15bc47], "remove");
                                        } catch (_0x2bc2a4) {
                                            console["log"]("antilink warn-kick failed: " + _0x2bc2a4);
                                        }
                                    } else {
                                        const _0x28721b = _0x1c06b1 - _0xa3794c,
                                            _0x2fb8e5 = "Link detected, your warn_count was upgraded;\n rest: " + _0x28721b + '\x20';
                                        await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                                            'text': _0x2fb8e5,
                                            'mentions': [_0x15bc47]
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (_0x500e16) {
            console['log']('lib\x20error\x20' + _0x500e16);
        }
        try {
            const _0x39ed00 = _0x4aeba8['key']?.['id']?.['startsWith']('BAES') && _0x4aeba8['key']?.['id']?.["length"] === 0x10,
                _0x1393bc = _0x4aeba8["key"]?.['id']?.["startsWith"]('BAE5') && _0x4aeba8["key"]?.['id']?.['length'] === 0x10;
            if (_0x39ed00 || _0x1393bc) {
                const _0x5e61f8 = await atbverifierEtatJid(_0x3ac8b2);
                if (!_0x5e61f8) return;;
                if (_0x44a93a || _0x15bc47 === _0xb17d2e) {
                    console['log']('nothing\x20to\x20do');
                    return;
                };
                const _0x52313e = {
                    'remoteJid': _0x3ac8b2,
                    'fromMe': ![],
                    'id': _0x4aeba8["key"]['id'],
                    'participant': _0x15bc47
                };
                var _0x25c684 = "bot detected, \n";
                const _0x43f9b1 = 'https://raw.githubusercontent.com/shadricksanga7-hub/MSELA-CHUI-TECHNOLOGIES/main/plugins/scs/leopard-menu-1.png';
                var _0x9acb2b = new Sticker(_0x43f9b1, {
                    'pack': 'MSELA CHUI XMD',
                    'author': conf["OWNER_NAME"],
                    'type': StickerTypes["FULL"],
                    'categories': ['🤩', '🎉'],
                    'id': '12345',
                    'quality': 0x32,
                    'background': '#000000'
                });
                await _0x9acb2b['toFile']("st1.webp");
                var _0x1f26ac = await atbrecupererActionJid(_0x3ac8b2);
                if (_0x1f26ac === 'remove') {
                    _0x25c684 += "message deleted \n @" + _0x15bc47['split']('@')[0x0] + '\x20removed\x20from\x20group.', await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                        'sticker': fs["readFileSync"]("st1.webp")
                    }), (0x0, baileys_1['delay'])(0x320), await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                        'text': _0x25c684,
                        'mentions': [_0x15bc47]
                    }, {
                        'quoted': _0x4aeba8
                    });
                    try {
                        await _0x4f6f40['groupParticipantsUpdate'](_0x3ac8b2, [_0x15bc47], 'remove');
                    } catch (_0x51c2fb) {
                        console['log']('antibot\x20') + _0x51c2fb;
                    }
                    await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                        'delete': _0x52313e
                    }), await fs['unlink']("st1.webp");
                } else {
                    if (_0x1f26ac === "delete") _0x25c684 += "message deleted \n @" + _0x15bc47['split']('@')[0x0] + '\x20Avoid\x20sending\x20links.', await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                        'text': _0x25c684,
                        'mentions': [_0x15bc47]
                    }, {
                        'quoted': _0x4aeba8
                    }), await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                        'delete': _0x52313e
                    }), await fs['unlink']("st1.webp");
                    else {
                        if (_0x1f26ac === 'warn') {
                            const {
                                getWarnCountByJID: _0x1f483f,
                                ajouterUtilisateurAvecWarnCount: _0x4afae1
                            } = require('./lib/warn');
                            let _0x7c53f4 = await _0x1f483f(_0x15bc47),
                                _0x2c73f0 = getConf('WARN_COUNT');
                            if (_0x7c53f4 >= _0x2c73f0) {
                                var _0x4a3121 = 'bot\x20detected;\x20you\x20will\x20be\x20removed\x20because\x20of\x20reaching\x20warn-limit';
                                await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                                    'text': _0x4a3121,
                                    'mentions': [_0x15bc47]
                                }, {
                                    'quoted': _0x4aeba8
                                }), await _0x4f6f40['groupParticipantsUpdate'](_0x3ac8b2, [_0x15bc47], 'remove'), await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                                    'delete': _0x52313e
                                });
                            } else {
                                var _0xc1eb0b = _0x2c73f0 - _0x7c53f4,
                                    _0x4b7986 = 'bot\x20detected,\x20your\x20warn_count\x20was\x20upgraded;\x0a\x20rest:\x20' + _0xc1eb0b + '\x20';
                                await _0x4afae1(_0x15bc47), await _0x4f6f40["sendMessage"](_0x3ac8b2, {
                                    'text': _0x4b7986,
                                    'mentions': [_0x15bc47]
                                }, {
                                    'quoted': _0x4aeba8
                                }), await _0x4f6f40['sendMessage'](_0x3ac8b2, {
                                    'delete': _0x52313e
                                });
                            }
                        }
                    }
                }
            }
        } catch (_0x1db0bb) {
            console['log'](".... " + _0x1db0bb);
        }
        if (_0x33cedd || _0xf89cb7 === 'sendtopm') {
            const _0x5a7239 = evt['cm']['find'](_0x1f211e => _0x1f211e["nomCom"] === _0xf89cb7 || Array['isArray'](_0x1f211e['alias']) && _0x1f211e['alias']['includes'](_0xf89cb7));
            if (_0x5a7239) try {
                const _0x1fe1fe = String(getConf('MODE') || 'on')['trim']()["toLowerCase"](),
                    _0x4d1e58 = !['off', 'private', 'no', 'false', '0'].includes(_0x1fe1fe),
                    _0x17f5e7 = new Set(_0x22fa2a(_0xb17d2e)),
                    _0x5a7fba = Boolean(_0x4aeba8['key']?.["fromMe"]) || _0x22fa2a(_0x15bc47)["some"](_0x5e67a7 => _0x17f5e7['has'](_0x5e67a7)),
                    _0x2b3354 = _0xf89cb7 === 'mode' && _0x3b7703;
                if (!_0x4d1e58 && !_0x5a7fba && !_0x2b3354) {
                    return;
                }
                if (!_0x3b7703 && _0x3ac8b2 === _0x15bc47 && getConf('PM_PERMIT') === 'on') {
                    _0x33a9ab('You\x20don\x27t\x20have\x20access\x20to\x20commands\x20here');
                    return;
                }
                if (!_0x3b7703 && _0x2decc9) {
                    let _0x53c592 = await isGroupBanned(_0x3ac8b2);
                    if (_0x53c592) return;
                }
                if (!_0x44a93a && _0x2decc9) {
                    let _0x3694f6 = await isGroupOnlyAdmin(_0x3ac8b2);
                    if (_0x3694f6) return;
                }
                if (!_0x3b7703) {
                    let _0x5537c3 = await isUserBanned(_0x15bc47);
                    if (_0x5537c3) {
                        _0x33a9ab("You are banned from bot commands");
                        return;
                    }
                }
                reagir(_0x3ac8b2, _0x4f6f40, _0x4aeba8, _0x5a7239['reaction']), _0x5a7239['fonction'](_0x3ac8b2, _0x4f6f40, _0x7b852d);
            } catch (_0x522569) {
                console['log']('😡😡\x20' + _0x522569), _0x4f6f40["sendMessage"](_0x3ac8b2, {
                    'text': '😡😡\x20' + _0x522569
                }, {
                    'quoted': _0x4aeba8
                });
            }
        }
    });
    const {
        groupEvents: _0x36ec8b
    } = require("./handlres/eventHandler");
    _0x4f6f40['ev']['on']('group-participants.update', async _0x127afa => {
        const _0x342506 = _0x1c997b;
        try {
            await _0x36ec8b(_0x4f6f40, _0x127afa);
        } catch (_0x44f693) {
            console["error"]('❌\x20Error\x20handling\x20group\x20participants\x20update:', _0x44f693);
        }
    });
    async function _0x4c7233() {
        const _0x1d9f6f = _0x1c997b,
            _0x489108 = require('node-cron'),
            {
                getCron: _0x28cd12
            } = require('./lib/cron');
        let _0x5a81bf = await _0x28cd12();
        console["log"](_0x5a81bf);
        if (_0x5a81bf['length'] > 0x0)
            for (let _0x5d9ad2 = 0x0; _0x5d9ad2 < _0x5a81bf['length']; _0x5d9ad2++) {
                if (_0x5a81bf[_0x5d9ad2]['mute_at'] != null) {
                    let _0x2a6c26 = _0x5a81bf[_0x5d9ad2]["mute_at"]['split'](':');
                    console['log']('Setting\x20auto-mute\x20for\x20' + _0x5a81bf[_0x5d9ad2]['group_id'] + '\x20at\x20' + _0x2a6c26[0x0] + 'H\x20' + _0x2a6c26[0x1]), _0x489108["schedule"](_0x2a6c26[0x1] + '\x20' + _0x2a6c26[0x0] + '\x20*\x20*\x20*', async () => {
                        const _0x203741 = _0x1d9f6f;
                        await _0x4f6f40['groupSettingUpdate'](_0x5a81bf[_0x5d9ad2]['group_id'], 'announcement'), _0x4f6f40["sendMessage"](_0x5a81bf[_0x5d9ad2]['group_id'], {
                            'image': {
                                'url': './scs/media/chrono.webp'
                            },
                            'caption': 'Hello,\x20it\x27s\x20time\x20to\x20close\x20the\x20group;\x20sayonara.'
                        });
                    }, {
                        'timezone': 'Africa/Nairobi'
                    });
                }
                if (_0x5a81bf[_0x5d9ad2]["unmute_at"] != null) {
                    let _0x32b6f5 = _0x5a81bf[_0x5d9ad2]['unmute_at']["split"](':');
                    console['log']('Setting\x20auto-unmute\x20for\x20' + _0x32b6f5[0x0] + 'H\x20' + _0x32b6f5[0x1]), _0x489108['schedule'](_0x32b6f5[0x1] + '\x20' + _0x32b6f5[0x0] + " * * *", async () => {
                        const _0x2db230 = _0x1d9f6f;
                        await _0x4f6f40['groupSettingUpdate'](_0x5a81bf[_0x5d9ad2]['group_id'], "not_announcement"), _0x4f6f40['sendMessage'](_0x5a81bf[_0x5d9ad2]['group_id'], {
                            'image': {
                                'url': './scs/media/chrono.webp'
                            },
                            'caption': "Good morning; It's time to open the group."
                        });
                    }, {
                        'timezone': 'Africa/Nairobi'
                    });
                }
            } else console["log"]("Crons were not activated");
        return;
    }
    return _0x4f6f40['ev']['on']('contacts.upsert', async _0x174bbf => {
        const _0x13ceb4 = _0x29f1ce => {
            const _0x5b3236 = null;
            for (const _0x378f9f of _0x29f1ce) {
                store['contacts'][_0x378f9f['id']] ? Object["assign"](store['contacts'][_0x378f9f['id']], _0x378f9f) : store['contacts'][_0x378f9f['id']] = _0x378f9f;
            }
            return;
        };
        _0x13ceb4(_0x174bbf);
    }), _0x4f6f40['ev']['on']('connection.update', async _0x490e8e => {
        const _0x7e1d7a = _0x1c997b,
            {
                lastDisconnect: _0x50e096,
                connection: _0x5f45b3
            } = _0x490e8e;
        if (_0x5f45b3 === 'connecting') console["log"]('\x20msela\x20chui\x20is\x20connecting...');
        else {
            if (_0x5f45b3 === 'open') {
                isReconnecting = ![], boundedAttempts = 0x0, await joinConfiguredDestinations(_0x4f6f40), console['log']("✅ 𝐌selachui Connected to WhatsApp! ☺️"), console['log']('📱 Device profile: ' + ('Android')), console['log']('--'), await (0x0, baileys_1['delay'])(0xc8), console['log']('------'), await (0x0, baileys_1['delay'])(0x12c), console['log']('------------------/-----'), console['log']('msela\x20chui\x20is\x20Online\x20🕸\x0a\x0a'), console['log']('Loading\x20msela\x20chui\x20Commands\x20...\x0a');
                const {
                    loadPlugins: _0x2f850a
                } = require(__dirname + '/handlres/commandHandler');
                _0x2f850a(__dirname + '/plugins'), (0x0, baileys_1["delay"])(0x2bc);
                var _0x41aa42;
                if (getConf("MODE")['toLocaleLowerCase']() === 'on') _0x41aa42 = 'public';
                else getConf('MODE')["toLocaleLowerCase"]() === "off" ? _0x41aa42 = "private" : _0x41aa42 = "undefined";
                console["log"]('Commands\x20Installation\x20Completed\x20✅'), await _0x4c7233();
                const _0x5cf0b9 = {
                    'isForwarded': !![],
                    'forwardingScore': 0x3e7,
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': CHANNEL_JID,
                        'newsletterName': '𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃',
                        'serverMessageId': 0x1
                    }
                };
                let _0xc1e295 = "╭─「 *𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃* 」\n│ ✅ *𝗢𝗡𝗟𝗜𝗡𝗘*\n├──────────────\n│ ⚙️ 𝗠𝗼𝗱𝗲: *" + _0x41aa42['toUpperCase']() + "*\n│ ⌨️ 𝗣𝗿𝗲𝗳𝗶𝘅: *" + prefixe + '*\x0a│\x20🌐\x20𝗪𝗲𝗯:\x20*github.com/shadricksanga7-hub/MSELA-CHUI-TECHNOLOGIES*\x0a│\x20📣\x20𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹\x20𝗖𝗵𝗮𝗻𝗻𝗲𝗹\x0a╰──────────────';
                const _0x34c72d = (getConf('NUMERO_OWNER') || conf["NUMERO_OWNER"] || '')['replace'](/[^0-9]/g, ''),
                    _0x14e99e = _0x34c72d ? _0x34c72d + "@s.whatsapp.net" : (_0x4f6f40['user']['id'] || '')['split'](':')[0x0]["split"]('@')[0x0] + "@s.whatsapp.net";
                await _0x4f6f40['sendMessage'](_0x14e99e, {
                    'text': _0xc1e295,
                    'contextInfo': _0x5cf0b9
                })['catch'](_0x4acfdb => {
                    const _0x282397 = _0x7e1d7a;
                    console['log']('⚠️\x20Could\x20not\x20send\x20start\x20message\x20to', _0x14e99e, ':', _0x4acfdb["message"] || _0x4acfdb);
                });
            } else {
                if (_0x5f45b3 == 'close') {
                    let _0x355b73 = new boom_1[("Boom")](_0x50e096?.["error"])?.['output']['statusCode'];
                    console['log']('[connection\x20close]\x20statusCode:', _0x355b73, '|\x20message:', _0x50e096?.['error']?.["message"], '|\x20data:', JSON["stringify"](_0x50e096?.['error']?.['data'] || _0x50e096?.['error']?.['output']?.["payload"] || {}));
                    if (_0x355b73 === baileys_1['DisconnectReason']['badSession']) console["log"]('Session\x20id\x20error,\x20rescan\x20again...'), boundedReconnect('badSession');
                    else {
                        if (_0x355b73 === baileys_1["DisconnectReason"]['connectionClosed']) console['log']('!!!\x20connection\x20closed,\x20reconnecting\x20...'), safeReconnect("connectionClosed");
                        else {
                            if (_0x355b73 === baileys_1["DisconnectReason"]['connectionLost']) console["log"]("connection error 😞 ,,, trying to reconnect... "), safeReconnect("connectionLost");
                            else {
                                if (_0x355b73 === baileys_1["DisconnectReason"]?.["connectionReplaced"]) console["log"]('❌\x20WhatsApp\x20session\x20conflict\x20(440):\x20another\x20MSELA CHUI XMD\x20XMD\x20deployment\x20is\x20already\x20using\x20this\x20session.'), console["log"]('🛑\x20Automatic\x20reconnect\x20is\x20disabled\x20for\x20this\x20conflict.\x20Stop\x20every\x20other\x20bot\x20instance,\x20then\x20restart\x20this\x20one\x20once.');
                                else {
                                    if (_0x355b73 === baileys_1['DisconnectReason']['loggedOut']) console['log']("you are disconnected ,,, please rescan the QR code");
                                    else {
                                        if (_0x355b73 === baileys_1["DisconnectReason"]["restartRequired"]) console['log']("restarting ▶️"), safeReconnect("restartRequired");
                                        else _0x355b73 === 0x193 || _0x355b73 === baileys_1["DisconnectReason"]?.['forbidden'] ? (console['log']('❌\x20WhatsApp\x20rejected\x20the\x20connection\x20(403/forbidden).\x20This\x20usually\x20means\x20the\x20session\x20was\x20banned/unlinked\x20by\x20WhatsApp,\x20not\x20a\x20temporary\x20issue.'), console["log"]('👉\x20Fix:\x20delete\x20the\x20session\x20files\x20in\x20/public\x20(or\x20wherever\x20your\x20auth\x20state\x20is\x20stored),\x20redeploy,\x20and\x20re-pair\x20with\x20a\x20fresh\x20QR\x20code\x20/\x20pairing\x20code.'), console['log']("   Auto-reconnect is intentionally NOT triggered for this error to avoid repeatedly hitting WhatsApp with a rejected session.")) : (console["log"]('restarting\x20due\x20to\x20error\x20\x20', _0x355b73), safeReconnect('unknown-' + _0x355b73));
                                    }
                                }
                            }
                        }
                    }
                    console['log']('connection\x20state:\x20' + _0x5f45b3);
                }
            }
        }
    }), _0x4f6f40['ev']['on']('creds.update', _0x3818cf), _0x4f6f40["downloadAndSaveMediaMessage"] = async (_0x50fe48, _0x3f9e0a = '', _0x3a5833 = !![]) => {
        const _0x284644 = _0x1c997b;
        let _0x4a95ef = _0x50fe48["msg"] ? _0x50fe48['msg'] : _0x50fe48,
            _0x599e5e = (_0x50fe48['msg'] || _0x50fe48)["mimetype"] || '',
            _0x2c2eb1 = _0x50fe48['mtype'] ? _0x50fe48['mtype']['replace'](/Message/gi, '') : _0x599e5e["split"]('/')[0x0];
        const _0x2981b9 = await (0x0, baileys_1['downloadContentFromMessage'])(_0x4a95ef, _0x2c2eb1);
        let _0x5154e2 = Buffer['from']([]);
        for await (const _0xa97821 of _0x2981b9) {
            _0x5154e2 = Buffer['concat']([_0x5154e2, _0xa97821]);
        }
        let _0x22326e = await FileType['fromBuffer'](_0x5154e2),
            _0x503c11 = './' + _0x3f9e0a + '.' + _0x22326e['ext'];
        return await fs['writeFileSync'](_0x503c11, _0x5154e2), _0x503c11;
    }, _0x4f6f40['awaitForMessage'] = async (_0x4490f8 = {}) => {
        return new Promise((_0x4a7a61, _0x18749b) => {
            const _0x16edbc = null;
            if (typeof _0x4490f8 !== 'object') _0x18749b(new Error("Options must be an object"));
            if (typeof _0x4490f8['sender'] !== "string") _0x18749b(new Error("Sender must be a string"));
            if (typeof _0x4490f8['chatJid'] !== 'string') _0x18749b(new Error('ChatJid\x20must\x20be\x20a\x20string'));
            if (_0x4490f8['timeout'] && typeof _0x4490f8["timeout"] !== "number") _0x18749b(new Error('Timeout\x20must\x20be\x20a\x20number'));
            if (_0x4490f8["filter"] && typeof _0x4490f8['filter'] !== 'function') _0x18749b(new Error("Filter must be a function"));
            const _0x3da99a = _0x4490f8?.['timeout'] || undefined,
                _0x22cf32 = _0x4490f8?.['filter'] || (() => !![]);
            let _0x10e826 = undefined,
                _0x226b84 = _0x5f959f => {
                    const _0x3ff288 = _0x16edbc;
                    let {
                        type: _0x5b2291,
                        messages: _0x2c8c5e
                    } = _0x5f959f;
                    if (_0x5b2291 == 'notify')
                        for (let _0x1bbabd of _0x2c8c5e) {
                            const _0x363db0 = _0x1bbabd["key"]['fromMe'],
                                _0x4d00ac = _0x1bbabd["key"]['remoteJid'],
                                _0x23f4fe = _0x4d00ac['endsWith']('@g.us'),
                                _0x5ea8a7 = _0x4d00ac == 'status@broadcast',
                                _0x3dab7b = _0x363db0 ? _0x4f6f40["user"]['id']["replace"](/:.*@/g, '@') : _0x23f4fe || _0x5ea8a7 ? _0x1bbabd['key']['participant']["replace"](/:.*@/g, '@') : _0x4d00ac;
                            _0x3dab7b == _0x4490f8["sender"] && _0x4d00ac == _0x4490f8['chatJid'] && _0x22cf32(_0x1bbabd) && (_0x4f6f40['ev']['off']('messages.upsert', _0x226b84), clearTimeout(_0x10e826), _0x4a7a61(_0x1bbabd));
                        }
                };
            _0x4f6f40['ev']['on']("messages.upsert", _0x226b84), _0x3da99a && (_0x10e826 = setTimeout(() => {
                const _0x234b26 = _0x16edbc;
                _0x4f6f40['ev']['off']("messages.upsert", _0x226b84), _0x18749b(new Error("Timeout"));
            }, _0x3da99a));
        });
    }, _0x4f6f40;
}
setTimeout(() => {
    let _0x4c94f4 = require['resolve'](__filename);
    fs['watchFile'](_0x4c94f4, () => {
        const _0x10e104 = null;
        fs["unwatchFile"](_0x4c94f4), console['log']('updated\x20' + __filename), delete require['cache'][_0x4c94f4], require(_0x4c94f4);
    }), main();
}, 0x1388);
