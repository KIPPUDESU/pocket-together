import type { I18nMessagesSatisfiesType } from './dependencies'
import { i18nMessagesSettingPartProfilePart } from './profile'
/**
 * i18nMessages 设置页相关部分
 */
export const i18nMessagesSettingPart = {
  // 设置页 按钮
  settingButtonSave: {
    'en-US': () => 'Save' as const,
    'zh-CN': () => '保存' as const,
    'zh-TW': () => '保存' as const,
  },
  settingButtonCancel: {
    'en-US': () => 'Cancel' as const,
    'zh-CN': () => '取消' as const,
    'zh-TW': () => '取消' as const,
  },
  settingButtonConfirm: {
    'en-US': () => 'Confirm' as const,
    'zh-CN': () => '确认' as const,
    'zh-TW': () => '確認' as const,
  },
  // 个人信息相关部分
  ...i18nMessagesSettingPartProfilePart,
} as const satisfies I18nMessagesSatisfiesType
