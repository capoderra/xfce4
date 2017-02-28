#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

alias nas="ssh capoderra@192.168.0.18"
alias removelock="sudo rm -f /var/lib/pacman/db.lck"
alias halt='sudo shutdown -h now'
alias cp="cp -riv"      # recursive, interactive, verbose
alias rm="rm -i"      # interactive
alias mv="mv -iv"       # interactive, verbose
alias mkdir='mkdir -pv'
alias grep="grep -i"  # ignore case
alias u='yaourt -Syua'
alias ref="sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist~ && sudo reflector --verbose --latest 10 --country Brazil --sort rate --save /etc/pacman.d/mirrorlist"
